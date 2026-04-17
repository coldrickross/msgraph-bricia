const els = {
  dataInput: document.getElementById("data-input"),
  dataInput2: document.getElementById("data-input-2"),
  titleInput: document.getElementById("title-input"),
  xLabelInput: document.getElementById("xlabel-input"),
  yLabelInput: document.getElementById("ylabel-input"),
  colorInput: document.getElementById("color-input"),
  colorInput2: document.getElementById("color-input-2"),
  bgColorInput: document.getElementById("bgcolor-input"),
  textColorInput: document.getElementById("textcolor-input"),
  gridColorInput: document.getElementById("gridcolor-input"),
  fontFamilyInput: document.getElementById("font-family-input"),
  fontSizeInput: document.getElementById("font-size-input"),
  yLabelOffsetInput: document.getElementById("ylabel-offset-input"),
  gridInput: document.getElementById("grid-input"),
  normalizeInput: document.getElementById("normalize-input"),
  labelInput: document.getElementById("label-input"),
  thresholdInput: document.getElementById("threshold-input"),
  decimalsInput: document.getElementById("decimals-input"),
  xMinInput: document.getElementById("xmin-input"),
  xMaxInput: document.getElementById("xmax-input"),
  boxInput: document.getElementById("box-input"),
  peakMarkerInput: document.getElementById("peak-marker-input"),
  widthInput: document.getElementById("width-input"),
  heightInput: document.getElementById("height-input"),
  scaleInput: document.getElementById("scale-input"),
  previewSizeInput: document.getElementById("preview-size-input"),
  compareInput: document.getElementById("compare-input"),
  compareInput3: document.getElementById("compare-input-3"),
  secondSpectrumGroup: document.getElementById("second-spectrum-group"),
  thirdSpectrumGroup: document.getElementById("third-spectrum-group"),
  dataInput3: document.getElementById("data-input-3"),
  colorInput3: document.getElementById("color-input-3"),
  yShowInput: document.getElementById("yshow-input"),
  yShowInput2: document.getElementById("yshow-input-2"),
  yShowInput3: document.getElementById("yshow-input-3"),
  lockYInput: document.getElementById("lock-y-input"),
  gapInput: document.getElementById("gap-input"),
  plotBtn: document.getElementById("plot-btn"),
  downloadBtn: document.getElementById("download-btn"),
  loadExampleBtn: document.getElementById("load-example"),
  loadExampleBtn2: document.getElementById("load-example-2"),
  loadExampleBtn3: document.getElementById("load-example-3"),
  clearBtn: document.getElementById("clear-data"),
  clearBtn2: document.getElementById("clear-data-2"),
  clearBtn3: document.getElementById("clear-data-3"),
  clickSelectInput: document.getElementById("click-select-input"),
  clearSelectionBtn: document.getElementById("clear-selection-btn"),
  fileInput: document.getElementById("file-input"),
  fileInput2: document.getElementById("file-input-2"),
  fileInput3: document.getElementById("file-input-3"),
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
    dataLabel2: "Dados do segundo espectro (m/z, intensidade)",
    loadExample2: "Carregar exemplo 2",
    clear2: "Limpar 2",
    loadFile2: "Carregar arquivo 2 (.csv/.txt)",
    peakColor2: "Cor dos picos (2º)",
    dataLabel3: "Dados do terceiro espectro (m/z, intensidade)",
    loadExample3: "Carregar exemplo 3",
    clear3: "Limpar 3",
    loadFile3: "Carregar arquivo 3 (.csv/.txt)",
    peakColor3: "Cor dos picos (3º)",
    compareSpectra: "Adicionar segundo espectro abaixo",
    compareSpectra3: "Adicionar terceiro espectro abaixo",
    tabData: "Dados",
    tabStyle: "Estilo",
    tabAxes: "Eixos e picos",
    tabExport: "Exportar",
    yShow: "Escala Y (%)",
    yShow2: "Escala Y 2º (%)",
    yShow3: "Escala Y 3º (%)",
    lockY: "Travar escalas Y dos espectros",
    gapBetween: "Espaço entre espectros (%)",
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
    yLabelOffset: "Afastamento do rótulo Y (px)",
    showGrid: "Mostrar grade",
    showPeakMarkers: "Mostrar bolinha na ponta do pico",
    normalize: "Normalizar para pico base (100%)",
    labelPeaks: "Rotular picos principais",
    threshold: "Limite para rótulos (%)",
    clickToLabel: "Mostrar m/z ao clicar no pico",
    clearSelection: "Limpar seleção de picos",
    decimals: "Casas decimais do m/z",
    xMin: "m/z mínimo (auto se vazio)",
    xMax: "m/z máximo (auto se vazio)",
    closeBox: "Fechar caixa do gráfico",
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
    dataLabel2: "Second spectrum data (m/z, intensity)",
    loadExample2: "Load example 2",
    clear2: "Clear 2",
    loadFile2: "Load file 2 (.csv/.txt)",
    peakColor2: "Peak color (2nd)",
    dataLabel3: "Third spectrum data (m/z, intensity)",
    loadExample3: "Load example 3",
    clear3: "Clear 3",
    loadFile3: "Load file 3 (.csv/.txt)",
    peakColor3: "Peak color (3rd)",
    compareSpectra: "Add a second spectrum below",
    compareSpectra3: "Add a third spectrum below",
    tabData: "Data",
    tabStyle: "Style",
    tabAxes: "Axes & peaks",
    tabExport: "Export",
    yShow: "Y scale (%)",
    yShow2: "Y scale 2nd (%)",
    yShow3: "Y scale 3rd (%)",
    lockY: "Lock Y scales of all spectra",
    gapBetween: "Gap between spectra (%)",
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
    yLabelOffset: "Y label offset (px)",
    showGrid: "Show grid",
    showPeakMarkers: "Show dot at peak tip",
    normalize: "Normalize to base peak (100%)",
    labelPeaks: "Label main peaks",
    threshold: "Label threshold (%)",
    clickToLabel: "Show m/z when clicking a peak",
    clearSelection: "Clear peak selection",
    decimals: "m/z decimal places",
    xMin: "Min m/z (auto if empty)",
    xMax: "Max m/z (auto if empty)",
    closeBox: "Close plot box",
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

const EXAMPLE = `229.171734 5.021981
243.188475 105.326878
244.117278 251.218299
245.227142 0.385001
255.190948 0.416775
256.227004 18.092581
257.222294 15.703728
261.054260 0.302891
273.014587 0.749061
285.492096 0.272926
286.124329 0.344009
287.213196 0.452914
294.818176 0.843925
311.291504 0.452673
315.236938 0.417173
323.233414 12.090869
327.976692 13.618586
341.297180 24.572100
359.166493 13.360824
360.214929 2.160940
377.124113 29806.880534
377.728163 32.063554
393.805817 0.586843
405.025543 0.350309
421.386128 1.761244
435.328491 0.417305`;

const EXAMPLE_2 = `359.585052 1.793388
377.118828 37326.226888
377.699767 32.192844
394.570923 1.128782
396.087158 6.391528
421.711910 3.275671`;

const EXAMPLE_3 = `243.190215 90.412556
244.119112 220.567431
256.225914 12.115204
328.011245 8.235611
377.119901 28912.453221
421.388421 1.512330`;

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

function makeSharedYLabel(text, fontSize, fontFamily, textColor, margin, extraOffset = 0) {
  const leftMargin = (margin && margin.l) || 70;
  return {
    text,
    xref: "paper",
    yref: "paper",
    x: 0,
    y: 0.5,
    xanchor: "center",
    yanchor: "middle",
    xshift: -leftMargin * 0.6 - extraOffset,
    textangle: -90,
    showarrow: false,
    font: { size: fontSize, family: fontFamily, color: textColor },
  };
}

function buildStemTraces(mz, intensity, color, xaxisRef = "x", yaxisRef = "y", showMarkers = true) {
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
    xaxis: xaxisRef,
    yaxis: yaxisRef,
    line: { color, width: 1.5 },
    hoverinfo: "skip",
    showlegend: false,
  };

  const markers = {
    type: "scatter",
    mode: "markers",
    x: mz,
    y: intensity,
    xaxis: xaxisRef,
    yaxis: yaxisRef,
    marker: showMarkers
      ? { color, size: 6, symbol: "circle" }
      : { color, size: 0.1, opacity: 0 },
    hovertemplate: `m/z: %{x}<br>${t().hoverIntensity}: %{y:.2f}<extra></extra>`,
    showlegend: false,
  };

  return [stems, markers];
}

function buildAnnotations(mz, intensity, threshold, decimals, fontSize, fontFamily, textColor, xref = "x", yref = "y") {
  return mz
    .map((m, idx) => ({ m, i: intensity[idx] }))
    .filter((p) => p.i >= threshold)
    .map((p) => ({
      x: p.m,
      y: p.i,
      xref,
      yref,
      text: p.m.toFixed(decimals),
      showarrow: false,
      yshift: 10,
      font: { size: fontSize, color: textColor, family: fontFamily },
    }));
}

const selectedMz1 = new Set();
const selectedMz2 = new Set();
const selectedMz3 = new Set();

function pruneSelection(set, mzArray) {
  const valid = new Set(mzArray);
  for (const m of [...set]) {
    if (!valid.has(m)) set.delete(m);
  }
}

function buildManualAnnotations(mz, intensity, selectedSet, autoSet, decimals, fontSize, fontFamily, textColor, xref, yref) {
  if (!selectedSet.size) return [];
  return mz
    .map((m, idx) => ({ m, i: intensity[idx] }))
    .filter((p) => selectedSet.has(p.m) && !autoSet.has(p.m))
    .map((p) => ({
      x: p.m,
      y: p.i,
      xref,
      yref,
      text: p.m.toFixed(decimals),
      showarrow: false,
      yshift: 10,
      font: { size: fontSize, color: textColor, family: fontFamily },
    }));
}

function avoidStemCollisions(annotations, mz, intensity, xMin, xMax, plotWidthPx, fontSize) {
  if (!annotations || !annotations.length) return;
  if (!Number.isFinite(plotWidthPx) || plotWidthPx <= 0) return;
  const xRange = xMax - xMin;
  if (!Number.isFinite(xRange) || xRange <= 0) return;
  const pxPerData = plotWidthPx / xRange;
  const epsilon = 1e-9;

  for (const ann of annotations) {
    const m = ann.x;
    const i = ann.y;
    const text = String(ann.text == null ? "" : ann.text);
    const textWidthPx = Math.max(1, text.length * fontSize * 0.6);
    const halfWdata = (textWidthPx / 2) / pxPerData;

    let leftHit = false;
    let rightHit = false;
    for (let j = 0; j < mz.length; j++) {
      const mj = mz[j];
      if (mj === m) continue;
      if (Math.abs(mj - m) > halfWdata) continue;
      if (intensity[j] < i - epsilon) continue;
      if (mj < m) leftHit = true;
      else rightHit = true;
      if (leftHit && rightHit) break;
    }

    if (!leftHit && !rightHit) continue;
    if (rightHit && !leftHit) {
      ann.xanchor = "right";
      ann.xshift = -4;
      ann.yshift = 2;
    } else if (leftHit && !rightHit) {
      ann.xanchor = "left";
      ann.xshift = 4;
      ann.yshift = 2;
    } else {
      ann.xanchor = "left";
      ann.xshift = 4;
      ann.yshift = 2;
    }
  }
}

function avoidFrameLineCollisions(annotations, mz, intensity, xMin, xMax, plotWidthPx, yAxisTop, subplotHeightPx, fontSize) {
  if (!annotations || !annotations.length) return;
  if (!Number.isFinite(plotWidthPx) || plotWidthPx <= 0) return;
  if (!Number.isFinite(subplotHeightPx) || subplotHeightPx <= 0) return;
  if (!Number.isFinite(yAxisTop) || yAxisTop <= 0) return;
  const xRange = xMax - xMin;
  if (!Number.isFinite(xRange) || xRange <= 0) return;
  const pxPerDataX = plotWidthPx / xRange;
  const epsilon = 1e-9;

  for (const ann of annotations) {
    const peakPx = (ann.y / yAxisTop) * subplotHeightPx;
    const yshift = ann.yshift == null ? 0 : ann.yshift;
    const labelTopPx = ann.yanchor === "top"
      ? peakPx + yshift + fontSize
      : peakPx + yshift + fontSize / 2;
    if (labelTopPx <= subplotHeightPx - 1) continue;

    const m = ann.x;
    const i = ann.y;
    const text = String(ann.text == null ? "" : ann.text);
    const textWidthPx = Math.max(1, text.length * fontSize * 0.6);
    const halfWdata = (textWidthPx / 2) / pxPerDataX;

    let leftHit = false;
    let rightHit = false;
    for (let j = 0; j < mz.length; j++) {
      const mj = mz[j];
      if (mj === m) continue;
      if (Math.abs(mj - m) > halfWdata) continue;
      if (intensity[j] < i - epsilon) continue;
      if (mj < m) leftHit = true;
      else rightHit = true;
      if (leftHit && rightHit) break;
    }

    let chosenSide;
    if (ann.xanchor === "left" || ann.xanchor === "right") {
      chosenSide = ann.xanchor;
    } else if (rightHit && !leftHit) {
      chosenSide = "left";
    } else if (leftHit && !rightHit) {
      chosenSide = "right";
    } else {
      chosenSide = "right";
    }

    ann.xanchor = chosenSide;
    ann.xshift = chosenSide === "left" ? 4 : -4;
    ann.yanchor = "middle";
    ann.yshift = 0;
  }
}

function normalizeIntensities(intensity, doNormalize) {
  if (!doNormalize) return intensity.slice();
  const max = Math.max(...intensity);
  if (max <= 0) return intensity.slice();
  return intensity.map((v) => (v / max) * 100);
}

function plot() {
  const parsed = parseData(els.dataInput.value);

  if (parsed.mz.length === 0) {
    setStatus(t().statusNoData, "error");
    return;
  }

  const compareEnabled = els.compareInput.checked;
  const parsed2 = compareEnabled ? parseData(els.dataInput2.value) : { mz: [], intensity: [], errors: [] };
  const hasSecond = compareEnabled && parsed2.mz.length > 0;
  const compareEnabled3 = compareEnabled && els.compareInput3.checked;
  const parsed3 = compareEnabled3 ? parseData(els.dataInput3.value) : { mz: [], intensity: [], errors: [] };
  const hasThird = compareEnabled3 && parsed3.mz.length > 0;

  const normalize = els.normalizeInput.checked;
  const intensity = normalizeIntensities(parsed.intensity, normalize);
  const intensity2 = hasSecond ? normalizeIntensities(parsed2.intensity, normalize) : [];
  const intensity3 = hasThird ? normalizeIntensities(parsed3.intensity, normalize) : [];

  const color = els.colorInput.value;
  const color2 = els.colorInput2.value;
  const color3 = els.colorInput3.value;
  const bgColor = els.bgColorInput.value;
  const textColor = els.textColorInput.value;
  const gridColor = els.gridColorInput.value;
  const fontFamily = els.fontFamilyInput.value;
  const fontSize = parseInt(els.fontSizeInput.value, 10) || 14;
  const yLabelOffset = Math.max(parseFloat(els.yLabelOffsetInput.value) || 0, 0);
  const showGrid = els.gridInput.checked;
  const showPeakMarkers = els.peakMarkerInput.checked;

  const yMax = Math.max(...intensity);
  const yMax2 = hasSecond ? Math.max(...intensity2) : 0;
  const yMax3 = hasThird ? Math.max(...intensity3) : 0;

  const yShowPct = Math.max(parseFloat(els.yShowInput.value) || 100, 0.1);
  const lockY = els.lockYInput.checked;
  const yShowPct2Raw = Math.max(parseFloat(els.yShowInput2.value) || 100, 0.1);
  const yShowPct2 = hasSecond && lockY ? yShowPct : yShowPct2Raw;
  const yShowPct3Raw = Math.max(parseFloat(els.yShowInput3.value) || 100, 0.1);
  const yShowPct3 = hasThird && lockY ? yShowPct : yShowPct3Raw;

  const yAxisTop = (yShowPct / 100) * yMax * 1.12;
  const yAxisTop2 = hasSecond ? (yShowPct2 / 100) * yMax2 * 1.12 : 0;
  const yAxisTop3 = hasThird ? (yShowPct3 / 100) * yMax3 * 1.12 : 0;

  let allMz = parsed.mz;
  if (hasSecond) allMz = allMz.concat(parsed2.mz);
  if (hasThird) allMz = allMz.concat(parsed3.mz);
  const dataXMin = Math.min(...allMz);
  const dataXMax = Math.max(...allMz);
  const xMinRaw = els.xMinInput.value.trim();
  const xMaxRaw = els.xMaxInput.value.trim();
  const xMinUser = xMinRaw === "" ? NaN : parseFloat(xMinRaw.replace(",", "."));
  const xMaxUser = xMaxRaw === "" ? NaN : parseFloat(xMaxRaw.replace(",", "."));
  const xPadding = Math.max((dataXMax - dataXMin) * 0.05, 1);
  const xMin = Number.isFinite(xMinUser) ? xMinUser : dataXMin - xPadding;
  const xMax = Number.isFinite(xMaxUser) ? xMaxUser : dataXMax + xPadding;
  const closeBox = els.boxInput.checked;
  const xLabelText = els.xLabelInput.value || "<i>m/z</i>";
  const yLabelText = els.yLabelInput.value || t().hoverIntensity;

  const axisCommon = {
    tickfont: { size: fontSize, family: fontFamily, color: textColor },
    linecolor: textColor,
    tickcolor: textColor,
    gridcolor: gridColor,
    showgrid: showGrid,
    showline: true,
  };

  const xAxisBase = {
    ...axisCommon,
    range: [xMin, xMax],
    zeroline: false,
    mirror: closeBox ? "ticks" : false,
  };

  const yAxisBase = {
    ...axisCommon,
    rangemode: "nonnegative",
    zeroline: true,
    zerolinecolor: "#aab2bd",
    mirror: closeBox ? "ticks" : false,
  };

  const layout = {
    title: {
      text: els.titleInput.value || "",
      font: { size: Math.round(fontSize * 1.3), family: fontFamily, color: textColor },
    },
    font: { family: fontFamily, size: fontSize, color: textColor },
    margin: { l: 70 + yLabelOffset, r: 30, t: 60, b: 60 },
    plot_bgcolor: bgColor,
    paper_bgcolor: bgColor,
    hovermode: "closest",
  };

  let traces;
  let annotations = [];
  const threshold = parseFloat(els.thresholdInput.value) || 0;
  const decimals = parseInt(els.decimalsInput.value, 10) || 0;

  const exportWidth = parseInt(els.widthInput.value, 10);
  const exportHeight = parseInt(els.heightInput.value, 10);
  const previewAtExportSize = els.previewSizeInput.checked;
  let chartPxWidth;
  if (previewAtExportSize && exportWidth > 0) {
    chartPxWidth = exportWidth;
  } else {
    chartPxWidth = els.chart.clientWidth || els.chart.offsetWidth || 700;
  }
  const plotWidthPx = Math.max(50, chartPxWidth - (layout.margin.l || 0) - (layout.margin.r || 0));

  let chartPxHeight;
  if (previewAtExportSize && exportHeight > 0) {
    chartPxHeight = exportHeight;
  } else {
    chartPxHeight = els.chart.clientHeight || els.chart.offsetHeight || 500;
  }
  const plotHeightPx = Math.max(50, chartPxHeight - (layout.margin.t || 0) - (layout.margin.b || 0));

  pruneSelection(selectedMz1, parsed.mz);
  if (compareEnabled) pruneSelection(selectedMz2, parsed2.mz);
  if (compareEnabled3) pruneSelection(selectedMz3, parsed3.mz);

  if (hasThird) {
    const gapPctRaw = Math.max(parseFloat(els.gapInput.value) || 0, 0);
    const gapPct = Math.min(gapPctRaw, 30);
    const gap = gapPct / 100;
    const third = (1 - 2 * gap) / 3;
    const bottomDomain = [0, third];
    const middleDomain = [third + gap, 2 * third + gap];
    const topDomain = [2 * third + 2 * gap, 1];

    layout.xaxis = {
      ...xAxisBase,
      domain: [0, 1],
      anchor: "y",
      title: {
        text: xLabelText,
        font: { size: fontSize, family: fontFamily, color: textColor },
      },
    };
    layout.xaxis2 = {
      ...xAxisBase,
      domain: [0, 1],
      anchor: "y2",
      matches: "x",
      showticklabels: false,
      showline: false,
      title: "",
    };
    layout.xaxis3 = {
      ...xAxisBase,
      domain: [0, 1],
      anchor: "y3",
      matches: "x",
      showticklabels: false,
      showline: false,
      title: "",
    };
    layout.yaxis = {
      ...yAxisBase,
      domain: bottomDomain,
      anchor: "x",
      range: [0, yAxisTop3],
    };
    layout.yaxis2 = {
      ...yAxisBase,
      domain: middleDomain,
      anchor: "x2",
      range: [0, yAxisTop2],
    };
    layout.yaxis3 = {
      ...yAxisBase,
      domain: topDomain,
      anchor: "x3",
      range: [0, yAxisTop],
    };
    annotations.push(makeSharedYLabel(yLabelText, fontSize, fontFamily, textColor, layout.margin, yLabelOffset));

    const topTraces = buildStemTraces(parsed.mz, intensity, color, "x3", "y3", showPeakMarkers);
    const middleTraces = buildStemTraces(parsed2.mz, intensity2, color2, "x2", "y2", showPeakMarkers);
    const bottomTraces = buildStemTraces(parsed3.mz, intensity3, color3, "x", "y", showPeakMarkers);
    traces = topTraces.concat(middleTraces, bottomTraces);

    const autoSet1 = new Set();
    const autoSet2 = new Set();
    const autoSet3 = new Set();
    let annos1 = [];
    let annos2 = [];
    let annos3 = [];
    if (els.labelInput.checked) {
      const a1 = buildAnnotations(parsed.mz, intensity, threshold, decimals, fontSize, fontFamily, textColor, "x3", "y3");
      const a2 = buildAnnotations(parsed2.mz, intensity2, threshold, decimals, fontSize, fontFamily, textColor, "x2", "y2");
      const a3 = buildAnnotations(parsed3.mz, intensity3, threshold, decimals, fontSize, fontFamily, textColor, "x", "y");
      a1.forEach((a) => autoSet1.add(a.x));
      a2.forEach((a) => autoSet2.add(a.x));
      a3.forEach((a) => autoSet3.add(a.x));
      annos1 = annos1.concat(a1);
      annos2 = annos2.concat(a2);
      annos3 = annos3.concat(a3);
    }
    annos1 = annos1.concat(
      buildManualAnnotations(parsed.mz, intensity, selectedMz1, autoSet1, decimals, fontSize, fontFamily, textColor, "x3", "y3")
    );
    annos2 = annos2.concat(
      buildManualAnnotations(parsed2.mz, intensity2, selectedMz2, autoSet2, decimals, fontSize, fontFamily, textColor, "x2", "y2")
    );
    annos3 = annos3.concat(
      buildManualAnnotations(parsed3.mz, intensity3, selectedMz3, autoSet3, decimals, fontSize, fontFamily, textColor, "x", "y")
    );
    avoidStemCollisions(annos1, parsed.mz, intensity, xMin, xMax, plotWidthPx, fontSize);
    avoidStemCollisions(annos2, parsed2.mz, intensity2, xMin, xMax, plotWidthPx, fontSize);
    avoidStemCollisions(annos3, parsed3.mz, intensity3, xMin, xMax, plotWidthPx, fontSize);
    avoidFrameLineCollisions(annos1, parsed.mz, intensity, xMin, xMax, plotWidthPx, yAxisTop, third * plotHeightPx, fontSize);
    avoidFrameLineCollisions(annos2, parsed2.mz, intensity2, xMin, xMax, plotWidthPx, yAxisTop2, third * plotHeightPx, fontSize);
    avoidFrameLineCollisions(annos3, parsed3.mz, intensity3, xMin, xMax, plotWidthPx, yAxisTop3, third * plotHeightPx, fontSize);
    annotations = annotations.concat(annos1, annos2, annos3);
  } else if (hasSecond) {
    const gapPct = Math.min(Math.max(parseFloat(els.gapInput.value) || 0, 0), 80);
    const half = (1 - gapPct / 100) / 2;
    const topDomain = [1 - half, 1.0];
    const bottomDomain = [0.0, half];

    layout.xaxis = {
      ...xAxisBase,
      domain: [0, 1],
      anchor: "y",
      title: {
        text: xLabelText,
        font: { size: fontSize, family: fontFamily, color: textColor },
      },
    };
    layout.xaxis2 = {
      ...xAxisBase,
      domain: [0, 1],
      anchor: "y2",
      matches: "x",
      showticklabels: false,
      showline: false,
      title: "",
    };
    layout.yaxis = {
      ...yAxisBase,
      domain: bottomDomain,
      anchor: "x",
      range: [0, yAxisTop2],
    };
    layout.yaxis2 = {
      ...yAxisBase,
      domain: topDomain,
      anchor: "x2",
      range: [0, yAxisTop],
    };
    annotations.push(makeSharedYLabel(yLabelText, fontSize, fontFamily, textColor, layout.margin, yLabelOffset));

    const topTraces = buildStemTraces(parsed.mz, intensity, color, "x2", "y2", showPeakMarkers);
    const bottomTraces = buildStemTraces(parsed2.mz, intensity2, color2, "x", "y", showPeakMarkers);
    traces = topTraces.concat(bottomTraces);

    const autoSet1 = new Set();
    const autoSet2 = new Set();
    let annos1 = [];
    let annos2 = [];
    if (els.labelInput.checked) {
      const a1 = buildAnnotations(parsed.mz, intensity, threshold, decimals, fontSize, fontFamily, textColor, "x2", "y2");
      const a2 = buildAnnotations(parsed2.mz, intensity2, threshold, decimals, fontSize, fontFamily, textColor, "x", "y");
      a1.forEach((a) => autoSet1.add(a.x));
      a2.forEach((a) => autoSet2.add(a.x));
      annos1 = annos1.concat(a1);
      annos2 = annos2.concat(a2);
    }
    annos1 = annos1.concat(
      buildManualAnnotations(parsed.mz, intensity, selectedMz1, autoSet1, decimals, fontSize, fontFamily, textColor, "x2", "y2")
    );
    annos2 = annos2.concat(
      buildManualAnnotations(parsed2.mz, intensity2, selectedMz2, autoSet2, decimals, fontSize, fontFamily, textColor, "x", "y")
    );
    avoidStemCollisions(annos1, parsed.mz, intensity, xMin, xMax, plotWidthPx, fontSize);
    avoidStemCollisions(annos2, parsed2.mz, intensity2, xMin, xMax, plotWidthPx, fontSize);
    avoidFrameLineCollisions(annos1, parsed.mz, intensity, xMin, xMax, plotWidthPx, yAxisTop, half * plotHeightPx, fontSize);
    avoidFrameLineCollisions(annos2, parsed2.mz, intensity2, xMin, xMax, plotWidthPx, yAxisTop2, half * plotHeightPx, fontSize);
    annotations = annotations.concat(annos1, annos2);
  } else {
    layout.xaxis = {
      ...xAxisBase,
      title: {
        text: xLabelText,
        font: { size: fontSize, family: fontFamily, color: textColor },
      },
    };
    layout.yaxis = {
      ...yAxisBase,
      range: [0, yAxisTop],
      title: {
        text: yLabelText,
        font: { size: fontSize, family: fontFamily, color: textColor },
        standoff: yLabelOffset,
      },
    };

    traces = buildStemTraces(parsed.mz, intensity, color, "x", "y", showPeakMarkers);

    const autoSet1 = new Set();
    let annos1 = [];
    if (els.labelInput.checked) {
      const a1 = buildAnnotations(parsed.mz, intensity, threshold, decimals, fontSize, fontFamily, textColor);
      a1.forEach((a) => autoSet1.add(a.x));
      annos1 = annos1.concat(a1);
    }
    annos1 = annos1.concat(
      buildManualAnnotations(parsed.mz, intensity, selectedMz1, autoSet1, decimals, fontSize, fontFamily, textColor, "x", "y")
    );
    avoidStemCollisions(annos1, parsed.mz, intensity, xMin, xMax, plotWidthPx, fontSize);
    avoidFrameLineCollisions(annos1, parsed.mz, intensity, xMin, xMax, plotWidthPx, yAxisTop, plotHeightPx, fontSize);
    annotations = annotations.concat(annos1);
  }

  if (annotations.length) layout.annotations = annotations;

  const responsive = !previewAtExportSize;

  if (previewAtExportSize && exportWidth > 0 && exportHeight > 0) {
    layout.width = exportWidth;
    layout.height = exportHeight;
    els.chart.style.width = `${exportWidth}px`;
    els.chart.style.height = `${exportHeight}px`;
    els.chart.style.maxWidth = "100%";
  } else {
    els.chart.style.width = "";
    els.chart.style.height = "";
    els.chart.style.maxWidth = "";
  }

  Plotly.react(els.chart, traces, layout, { responsive, displaylogo: false });
  attachZoomClamp();
  attachClickToSelect();

  const totalPeaks =
    parsed.mz.length + (hasSecond ? parsed2.mz.length : 0) + (hasThird ? parsed3.mz.length : 0);
  const ignored =
    parsed.errors.length + (hasSecond ? parsed2.errors.length : 0) + (hasThird ? parsed3.errors.length : 0);
  const extra = ignored ? t().statusLinesIgnored(ignored) : "";
  setStatus(t().statusGenerated(totalPeaks, extra), "success");
}

function attachClickToSelect() {
  if (els.chart._clickSelectAttached) return;
  els.chart._clickSelectAttached = true;
  els.chart.on("plotly_click", (evt) => {
    if (!els.clickSelectInput.checked) return;
    if (!evt || !evt.points || !evt.points.length) return;
    const p = evt.points[0];
    const axisRef = p.data && p.data.xaxis ? p.data.xaxis : "x";
    const compareEnabled = els.compareInput.checked;
    const compareEnabled3 = compareEnabled && els.compareInput3.checked;
    let set;
    if (compareEnabled3) {
      // 3 spectra: x3=top(1), x2=middle(2), x=bottom(3)
      set = axisRef === "x" ? selectedMz3 : axisRef === "x2" ? selectedMz2 : selectedMz1;
    } else if (compareEnabled) {
      // 2 spectra: x2=top(1), x=bottom(2)
      set = axisRef === "x" ? selectedMz2 : selectedMz1;
    } else {
      set = selectedMz1;
    }
    const m = p.x;
    if (set.has(m)) set.delete(m);
    else set.add(m);
    plot();
  });
}

function attachZoomClamp() {
  if (els.chart._yClampAttached) return;
  els.chart._yClampAttached = true;
  els.chart.on("plotly_relayout", (eventData) => {
    if (!eventData) return;
    const updates = {};
    ["yaxis", "yaxis2", "yaxis3"].forEach((ax) => {
      const lowKey = `${ax}.range[0]`;
      const highKey = `${ax}.range[1]`;
      const low = eventData[lowKey];
      const high = eventData[highKey];
      if (low !== undefined && low < 0) {
        updates[lowKey] = 0;
        if (high !== undefined && high <= 0) {
          updates[highKey] = Math.max(high, 1);
        }
      }
    });
    if (Object.keys(updates).length) {
      Plotly.relayout(els.chart, updates);
    }
  });
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

function readFile(file, targetInput = els.dataInput) {
  const reader = new FileReader();
  reader.onload = (e) => {
    targetInput.value = e.target.result;
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
els.clearSelectionBtn.addEventListener("click", () => {
  selectedMz1.clear();
  selectedMz2.clear();
  selectedMz3.clear();
  if (els.chart.data) plot();
});
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
  if (file) readFile(file, els.dataInput);
  e.target.value = "";
});
els.loadExampleBtn2.addEventListener("click", () => {
  els.dataInput2.value = EXAMPLE_2;
  setStatus(t().statusExampleLoaded);
});
els.clearBtn2.addEventListener("click", () => {
  els.dataInput2.value = "";
  setStatus("");
});
els.fileInput2.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) readFile(file, els.dataInput2);
  e.target.value = "";
});
els.loadExampleBtn3.addEventListener("click", () => {
  els.dataInput3.value = EXAMPLE_3;
  setStatus(t().statusExampleLoaded);
});
els.clearBtn3.addEventListener("click", () => {
  els.dataInput3.value = "";
  setStatus("");
});
els.fileInput3.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) readFile(file, els.dataInput3);
  e.target.value = "";
});

function updateCompareVisibility() {
  const on = els.compareInput.checked;
  els.secondSpectrumGroup.hidden = !on;
  document.querySelectorAll(".compare-only").forEach((el) => {
    el.hidden = !on;
  });
  updateCompare3Visibility();
}

function updateCompare3Visibility() {
  const on = els.compareInput.checked && els.compareInput3.checked;
  els.thirdSpectrumGroup.hidden = !on;
  document.querySelectorAll(".compare3-only").forEach((el) => {
    el.hidden = !on;
  });
}

function syncYShowFromLock(source) {
  if (!els.lockYInput.checked) return;
  [els.yShowInput, els.yShowInput2, els.yShowInput3].forEach((target) => {
    if (target !== source && target.value !== source.value) target.value = source.value;
  });
}
els.compareInput.addEventListener("change", () => {
  updateCompareVisibility();
  replotIfReady();
});
els.compareInput3.addEventListener("change", () => {
  updateCompare3Visibility();
  replotIfReady();
});
updateCompareVisibility();

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
  els.yLabelOffsetInput,
  els.gridInput,
  els.xMinInput,
  els.xMaxInput,
  els.boxInput,
  els.colorInput2,
  els.colorInput3,
  els.gapInput,
  els.peakMarkerInput,
].forEach((el) => {
  el.addEventListener("change", replotIfReady);
});

[els.yShowInput, els.yShowInput2, els.yShowInput3].forEach((el) => {
  el.addEventListener("input", () => syncYShowFromLock(el));
  el.addEventListener("change", replotIfReady);
});

els.lockYInput.addEventListener("change", () => {
  if (els.lockYInput.checked) {
    els.yShowInput2.value = els.yShowInput.value;
    els.yShowInput3.value = els.yShowInput.value;
  }
  replotIfReady();
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

function activateTab(name) {
  document.querySelectorAll(".tab").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === name);
  });
  document.querySelectorAll(".tab-panel").forEach((p) => {
    p.hidden = p.dataset.panel !== name;
  });
  if (els.chart && els.chart.data && window.Plotly) {
    Plotly.Plots.resize(els.chart);
  }
}

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => activateTab(btn.dataset.tab));
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
