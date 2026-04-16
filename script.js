const els = {
  dataInput: document.getElementById("data-input"),
  titleInput: document.getElementById("title-input"),
  xLabelInput: document.getElementById("xlabel-input"),
  yLabelInput: document.getElementById("ylabel-input"),
  colorInput: document.getElementById("color-input"),
  bgColorInput: document.getElementById("bgcolor-input"),
  textColorInput: document.getElementById("textcolor-input"),
  gridColorInput: document.getElementById("gridcolor-input"),
  fontFamilyInput: document.getElementById("font-family-input"),
  fontSizeInput: document.getElementById("font-size-input"),
  gridInput: document.getElementById("grid-input"),
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

const TRANSLATIONS = {
  "pt-BR": {
    pageTitle: "Gerador de Espectro de Massa",
    title: "Gerador de Espectro de Massa",
    subtitle: "Insira uma lista de valores m/z e intensidade para gerar o espectro",
    dataLabel: "Dados (m/z, intensidade)",
    dataPlaceholder:
      "Um par por linha. Separadores aceitos: vírgula, ponto e vírgula, tab ou espaço.\n\nExemplo:\n50.1, 12\n77.0, 45\n91.1, 100\n105.0, 38\n120.2, 8",
    loadExample: "Carregar exemplo",
    clear: "Limpar",
    loadFile: "Carregar arquivo (.csv/.txt)",
    chartTitle: "Título do gráfico",
    chartTitleDefault: "Espectro de Massa",
    xLabel: "Rótulo X",
    yLabel: "Rótulo Y",
    yLabelDefault: "Intensidade relativa (%)",
    peakColor: "Cor dos picos",
    bgColor: "Cor de fundo",
    textColor: "Cor do texto",
    gridColor: "Cor da grade",
    fontFamily: "Fonte",
    fontSize: "Tamanho da fonte (px)",
    showGrid: "Mostrar grade",
    normalize: "Normalizar para pico base (100%)",
    labelPeaks: "Rotular picos principais",
    threshold: "Limite para rótulos (%)",
    decimals: "Casas decimais do m/z",
    width: "Largura (px)",
    height: "Altura (px)",
    scale: "Escala (DPI)",
    previewSize: "Visualizar no tamanho de exportação",
    generate: "Gerar espectro",
    downloadPng: "Baixar PNG",
    footer: "Feito com Plotly.js \u00b7 Todos os cálculos rodam no navegador",
    hoverIntensity: "Intensidade",
    statusNoData: "Nenhum dado válido encontrado. Verifique o formato.",
    statusGenerated: (n, extra) => `Espectro gerado com ${n} picos${extra}.`,
    statusLinesIgnored: (n) => ` (${n} linha(s) ignorada(s))`,
    statusPlotFirst: "Gere o espectro antes de baixar.",
    statusFileLoaded: (name) => `Arquivo "${name}" carregado.`,
    statusFileError: "Erro ao ler o arquivo.",
    statusExampleLoaded: "Exemplo carregado. Clique em Gerar espectro.",
    errLineValues: (n) => `Linha ${n}: são necessários 2 valores.`,
    errLineInvalid: (n, a, b) => `Linha ${n}: valores inválidos "${a}, ${b}".`,
    errLineNegative: (n) => `Linha ${n}: intensidade negativa ignorada.`,
    filename: "espectro_massa",
  },
  en: {
    pageTitle: "Mass Spectrum Generator",
    title: "Mass Spectrum Generator",
    subtitle: "Enter a list of m/z and intensity values to generate the spectrum",
    dataLabel: "Data (m/z, intensity)",
    dataPlaceholder:
      "One pair per line. Accepted separators: comma, semicolon, tab or space.\n\nExample:\n50.1, 12\n77.0, 45\n91.1, 100\n105.0, 38\n120.2, 8",
    loadExample: "Load example",
    clear: "Clear",
    loadFile: "Load file (.csv/.txt)",
    chartTitle: "Chart title",
    chartTitleDefault: "Mass Spectrum",
    xLabel: "X label",
    yLabel: "Y label",
    yLabelDefault: "Relative intensity (%)",
    peakColor: "Peak color",
    bgColor: "Background color",
    textColor: "Text color",
    gridColor: "Grid color",
    fontFamily: "Font",
    fontSize: "Font size (px)",
    showGrid: "Show grid",
    normalize: "Normalize to base peak (100%)",
    labelPeaks: "Label main peaks",
    threshold: "Label threshold (%)",
    decimals: "m/z decimal places",
    width: "Width (px)",
    height: "Height (px)",
    scale: "Scale (DPI)",
    previewSize: "Preview at export size",
    generate: "Generate spectrum",
    downloadPng: "Download PNG",
    footer: "Made with Plotly.js \u00b7 All calculations run in the browser",
    hoverIntensity: "Intensity",
    statusNoData: "No valid data found. Check the format.",
    statusGenerated: (n, extra) => `Spectrum generated with ${n} peaks${extra}.`,
    statusLinesIgnored: (n) => ` (${n} line(s) ignored)`,
    statusPlotFirst: "Generate the spectrum before downloading.",
    statusFileLoaded: (name) => `File "${name}" loaded.`,
    statusFileError: "Error reading the file.",
    statusExampleLoaded: "Example loaded. Click Generate spectrum.",
    errLineValues: (n) => `Line ${n}: 2 values are required.`,
    errLineInvalid: (n, a, b) => `Line ${n}: invalid values "${a}, ${b}".`,
    errLineNegative: (n) => `Line ${n}: negative intensity ignored.`,
    filename: "mass_spectrum",
  },
};

let currentLang = "pt-BR";
const t = () => TRANSLATIONS[currentLang];

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
      errors.push(t().errLineValues(idx + 1));
      return;
    }

    const m = parseFloat(parts[0].replace(",", "."));
    const i = parseFloat(parts[1].replace(",", "."));

    if (Number.isNaN(m) || Number.isNaN(i)) {
      errors.push(t().errLineInvalid(idx + 1, parts[0], parts[1]));
      return;
    }
    if (i < 0) {
      errors.push(t().errLineNegative(idx + 1));
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
    hovertemplate: `m/z: %{x}<br>${t().hoverIntensity}: %{y:.2f}<extra></extra>`,
    showlegend: false,
  };

  return [stems, markers];
}

function buildAnnotations(mz, intensity, threshold, decimals, fontSize, fontFamily, textColor) {
  return mz
    .map((m, idx) => ({ m, i: intensity[idx] }))
    .filter((p) => p.i >= threshold)
    .map((p) => ({
      x: p.m,
      y: p.i,
      text: p.m.toFixed(decimals),
      showarrow: false,
      yshift: 10,
      font: { size: fontSize, color: textColor, family: fontFamily },
    }));
}

function plot() {
  const parsed = parseData(els.dataInput.value);

  if (parsed.mz.length === 0) {
    setStatus(t().statusNoData, "error");
    return;
  }

  let intensity = parsed.intensity.slice();
  const normalize = els.normalizeInput.checked;
  if (normalize) {
    const max = Math.max(...intensity);
    if (max > 0) intensity = intensity.map((v) => (v / max) * 100);
  }

  const color = els.colorInput.value;
  const bgColor = els.bgColorInput.value;
  const textColor = els.textColorInput.value;
  const gridColor = els.gridColorInput.value;
  const fontFamily = els.fontFamilyInput.value;
  const fontSize = parseInt(els.fontSizeInput.value, 10) || 14;
  const showGrid = els.gridInput.checked;
  const traces = buildStemTraces(parsed.mz, intensity, color);

  const yMax = Math.max(...intensity);
  const yPadding = yMax * 0.12;
  const xMin = Math.min(...parsed.mz);
  const xMax = Math.max(...parsed.mz);
  const xPadding = Math.max((xMax - xMin) * 0.05, 1);

  const layout = {
    title: {
      text: els.titleInput.value || "",
      font: { size: Math.round(fontSize * 1.3), family: fontFamily, color: textColor },
    },
    font: { family: fontFamily, size: fontSize, color: textColor },
    xaxis: {
      title: {
        text: els.xLabelInput.value || "m/z",
        font: { size: fontSize, family: fontFamily, color: textColor },
      },
      tickfont: { size: fontSize, family: fontFamily, color: textColor },
      range: [xMin - xPadding, xMax + xPadding],
      zeroline: false,
      showgrid: showGrid,
      gridcolor: gridColor,
      linecolor: textColor,
      tickcolor: textColor,
    },
    yaxis: {
      title: {
        text: els.yLabelInput.value || t().hoverIntensity,
        font: { size: fontSize, family: fontFamily, color: textColor },
      },
      tickfont: { size: fontSize, family: fontFamily, color: textColor },
      range: [0, yMax + yPadding],
      zeroline: true,
      zerolinecolor: "#aab2bd",
      showgrid: showGrid,
      gridcolor: gridColor,
      linecolor: textColor,
      tickcolor: textColor,
    },
    margin: { l: 70, r: 30, t: 60, b: 60 },
    plot_bgcolor: bgColor,
    paper_bgcolor: bgColor,
    hovermode: "closest",
  };

  if (els.labelInput.checked) {
    const threshold = parseFloat(els.thresholdInput.value) || 0;
    const decimals = parseInt(els.decimalsInput.value, 10) || 0;
    layout.annotations = buildAnnotations(
      parsed.mz,
      intensity,
      threshold,
      decimals,
      fontSize,
      fontFamily,
      textColor
    );
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

  const extra = parsed.errors.length ? t().statusLinesIgnored(parsed.errors.length) : "";
  setStatus(t().statusGenerated(parsed.mz.length, extra), "success");
}

function downloadPng() {
  if (!els.chart.data) {
    setStatus(t().statusPlotFirst, "error");
    return;
  }
  const width = parseInt(els.widthInput.value, 10) || 1200;
  const height = parseInt(els.heightInput.value, 10) || 700;
  const scale = parseFloat(els.scaleInput.value) || 2;
  Plotly.downloadImage(els.chart, {
    format: "png",
    filename: t().filename,
    width,
    height,
    scale,
  });
}

function readFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    els.dataInput.value = e.target.result;
    setStatus(t().statusFileLoaded(file.name), "success");
  };
  reader.onerror = () => setStatus(t().statusFileError, "error");
  reader.readAsText(file);
}

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  const prevDefaults = {
    title: TRANSLATIONS[currentLang].chartTitleDefault,
    yLabel: TRANSLATIONS[currentLang].yLabelDefault,
  };
  currentLang = lang;
  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) {
      if (el.tagName === "TITLE") {
        document.title = dict[key];
      } else if (el.tagName === "LABEL" && el.classList.contains("file-button")) {
        const input = el.querySelector("input");
        el.textContent = dict[key];
        if (input) el.appendChild(input);
      } else {
        el.textContent = dict[key];
      }
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.placeholder = dict[key];
  });
  document.querySelectorAll("[data-i18n-value]").forEach((el) => {
    const key = el.getAttribute("data-i18n-value");
    if (dict[key] == null) return;
    const prev = key === "chartTitleDefault" ? prevDefaults.title : key === "yLabelDefault" ? prevDefaults.yLabel : null;
    if (prev == null || el.value === "" || el.value === prev) {
      el.value = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem("ms-lang", lang);
  } catch (_) {}

  if (els.chart.data) plot();
}

els.plotBtn.addEventListener("click", plot);
els.downloadBtn.addEventListener("click", downloadPng);
els.loadExampleBtn.addEventListener("click", () => {
  els.dataInput.value = EXAMPLE;
  setStatus(t().statusExampleLoaded);
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

[
  els.bgColorInput,
  els.textColorInput,
  els.gridColorInput,
  els.fontFamilyInput,
  els.fontSizeInput,
  els.gridInput,
].forEach((el) => {
  el.addEventListener("change", replotIfReady);
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

let initialLang = "pt-BR";
try {
  const saved = localStorage.getItem("ms-lang");
  if (saved && TRANSLATIONS[saved]) {
    initialLang = saved;
  } else if (navigator.language && navigator.language.toLowerCase().startsWith("en")) {
    initialLang = "en";
  }
} catch (_) {}

applyLanguage(initialLang);
els.dataInput.value = EXAMPLE;
plot();
