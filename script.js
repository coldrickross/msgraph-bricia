const els = {
  dataInput: document.getElementById("data-input"),
  titleInput: document.getElementById("title-input"),
  xLabelInput: document.getElementById("xlabel-input"),
  yLabelInput: document.getElementById("ylabel-input"),
  colorInput: document.getElementById("color-input"),
  normalizeInput: document.getElementById("normalize-input"),
  labelInput: document.getElementById("label-input"),
  thresholdInput: document.getElementById("threshold-input"),
  decimalsInput: document.getElementById("decimals-input"),
  widthInput: document.getElementById("width-input"),
  heightInput: document.getElementById("height-input"),
  scaleInput: document.getElementById("scale-input"),
  previewSizeInput: document.getElementById("preview-size-input"),
  plotBtn: document.getElementById("plot-btn"),
  downloadBtn: document.getElementById("download-btn"),
  loadExampleBtn: document.getElementById("load-example"),
  clearBtn: document.getElementById("clear-data"),
  fileInput: document.getElementById("file-input"),
  status: document.getElementById("status"),
  chart: document.getElementById("chart"),
};

const EXAMPLE = `50.1, 12
51.1, 18
52.1, 8
63.0, 22
65.0, 35
77.0, 68
78.1, 15
91.1, 100
92.1, 45
105.0, 38
106.1, 14
120.2, 55
121.2, 9`;

function setStatus(message, type = "") {
  els.status.textContent = message;
  els.status.className = `status ${type}`.trim();
}

function parseData(text) {
  const lines = text.split(/\r?\n/);
  const mz = [];
  const intensity = [];
  const errors = [];

  lines.forEach((rawLine, idx) => {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || line.startsWith("//")) return;

    const parts = line.split(/[\s,;\t]+/).filter(Boolean);
    if (parts.length < 2) {
      errors.push(`Linha ${idx + 1}: são necessários 2 valores.`);
      return;
    }

    const m = parseFloat(parts[0].replace(",", "."));
    const i = parseFloat(parts[1].replace(",", "."));

    if (Number.isNaN(m) || Number.isNaN(i)) {
      errors.push(`Linha ${idx + 1}: valores inválidos "${parts[0]}, ${parts[1]}".`);
      return;
    }
    if (i < 0) {
      errors.push(`Linha ${idx + 1}: intensidade negativa ignorada.`);
      return;
    }

    mz.push(m);
    intensity.push(i);
  });

  return { mz, intensity, errors };
}

function buildStemTraces(mz, intensity, color) {
  const xs = [];
  const ys = [];
  mz.forEach((m, idx) => {
    xs.push(m, m, null);
    ys.push(0, intensity[idx], null);
  });

  const stems = {
    type: "scatter",
    mode: "lines",
    x: xs,
    y: ys,
    line: { color, width: 1.5 },
    hoverinfo: "skip",
    showlegend: false,
  };

  const markers = {
    type: "scatter",
    mode: "markers",
    x: mz,
    y: intensity,
    marker: { color, size: 6, symbol: "circle" },
    hovertemplate: "m/z: %{x}<br>Intensidade: %{y:.2f}<extra></extra>",
    showlegend: false,
  };

  return [stems, markers];
}

function buildAnnotations(mz, intensity, threshold, decimals) {
  return mz
    .map((m, idx) => ({ m, i: intensity[idx] }))
    .filter((p) => p.i >= threshold)
    .map((p) => ({
      x: p.m,
      y: p.i,
      text: p.m.toFixed(decimals),
      showarrow: false,
      yshift: 10,
      font: { size: 11, color: "#333" },
    }));
}

function plot() {
  const parsed = parseData(els.dataInput.value);

  if (parsed.mz.length === 0) {
    setStatus("Nenhum dado válido encontrado. Verifique o formato.", "error");
    return;
  }

  let intensity = parsed.intensity.slice();
  const normalize = els.normalizeInput.checked;
  if (normalize) {
    const max = Math.max(...intensity);
    if (max > 0) intensity = intensity.map((v) => (v / max) * 100);
  }

  const color = els.colorInput.value;
  const traces = buildStemTraces(parsed.mz, intensity, color);

  const yMax = Math.max(...intensity);
  const yPadding = yMax * 0.12;
  const xMin = Math.min(...parsed.mz);
  const xMax = Math.max(...parsed.mz);
  const xPadding = Math.max((xMax - xMin) * 0.05, 1);

  const layout = {
    title: { text: els.titleInput.value || "", font: { size: 16 } },
    xaxis: {
      title: { text: els.xLabelInput.value || "m/z" },
      range: [xMin - xPadding, xMax + xPadding],
      zeroline: false,
      showgrid: true,
      gridcolor: "#eceff3",
    },
    yaxis: {
      title: { text: els.yLabelInput.value || "Intensidade" },
      range: [0, yMax + yPadding],
      zeroline: true,
      zerolinecolor: "#aab2bd",
      showgrid: true,
      gridcolor: "#eceff3",
    },
    margin: { l: 70, r: 30, t: 60, b: 60 },
    plot_bgcolor: "#ffffff",
    paper_bgcolor: "#ffffff",
    hovermode: "closest",
  };

  if (els.labelInput.checked) {
    const threshold = parseFloat(els.thresholdInput.value) || 0;
    const decimals = parseInt(els.decimalsInput.value, 10) || 0;
    layout.annotations = buildAnnotations(parsed.mz, intensity, threshold, decimals);
  }

  const width = parseInt(els.widthInput.value, 10);
  const height = parseInt(els.heightInput.value, 10);
  const previewAtExportSize = els.previewSizeInput.checked;
  const responsive = !previewAtExportSize;

  if (previewAtExportSize && width > 0 && height > 0) {
    layout.width = width;
    layout.height = height;
    els.chart.style.width = `${width}px`;
    els.chart.style.height = `${height}px`;
    els.chart.style.maxWidth = "100%";
  } else {
    els.chart.style.width = "";
    els.chart.style.height = "";
    els.chart.style.maxWidth = "";
  }

  Plotly.react(els.chart, traces, layout, { responsive, displaylogo: false });

  const extra = parsed.errors.length ? ` (${parsed.errors.length} linha(s) ignorada(s))` : "";
  setStatus(`Espectro gerado com ${parsed.mz.length} picos${extra}.`, "success");
}

function downloadPng() {
  if (!els.chart.data) {
    setStatus("Gere o espectro antes de baixar.", "error");
    return;
  }
  const width = parseInt(els.widthInput.value, 10) || 1200;
  const height = parseInt(els.heightInput.value, 10) || 700;
  const scale = parseFloat(els.scaleInput.value) || 2;
  Plotly.downloadImage(els.chart, {
    format: "png",
    filename: "espectro_massa",
    width,
    height,
    scale,
  });
}

function readFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    els.dataInput.value = e.target.result;
    setStatus(`Arquivo "${file.name}" carregado.`, "success");
  };
  reader.onerror = () => setStatus("Erro ao ler o arquivo.", "error");
  reader.readAsText(file);
}

els.plotBtn.addEventListener("click", plot);
els.downloadBtn.addEventListener("click", downloadPng);
els.loadExampleBtn.addEventListener("click", () => {
  els.dataInput.value = EXAMPLE;
  setStatus("Exemplo carregado. Clique em Gerar espectro.");
});
els.clearBtn.addEventListener("click", () => {
  els.dataInput.value = "";
  setStatus("");
});
els.fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) readFile(file);
  e.target.value = "";
});

const replotIfReady = () => {
  if (els.chart.data) plot();
};
els.previewSizeInput.addEventListener("change", replotIfReady);
[els.widthInput, els.heightInput].forEach((el) => {
  el.addEventListener("change", () => {
    if (els.previewSizeInput.checked) replotIfReady();
  });
});

els.dataInput.value = EXAMPLE;
plot();
