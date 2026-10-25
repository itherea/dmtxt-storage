// Galería de sketches de Hydra. Usa una sola instancia de hydra-synth para todos.
(() => {
  const SK = window.SKETCHES || [];
  const $ = (s) => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  const MODO_CAPTURA = params.has("captura");

  const ETIQUETAS = {
    mouse: "Mouse", imagen: "Imagen", pantalla: "Pantalla",
    audio: "Audio", midi: "MIDI", glsl: "GLSL", versiones: "Versiones",
  };
  const AVISOS = {
    pantalla: "Este sketch usa tu pantalla como fuente: el navegador te va a pedir permiso para compartirla.",
    audio: "Este sketch reacciona al sonido: tocá «Micrófono» para usarlo.",
    midi: "Este sketch se controla con MIDI (cc[]): conectá un controlador y tocá MIDI. Sin controlador usa valores fijos.",
    mouse: "Mové el mouse sobre la imagen: este sketch reacciona a su posición.",
  };

  // ---------- Galería ----------
  let filtro = null;
  let texto = "";

  function dibujarChips() {
    const chips = $("#chips");
    const usados = Object.keys(ETIQUETAS).filter((t) => SK.some((s) => s.tags.includes(t)));
    [null, ...usados].forEach((t) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.textContent = t ? ETIQUETAS[t] : "Todos";
      b.setAttribute("aria-pressed", String(t === filtro));
      b.onclick = () => {
        filtro = t;
        chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
        b.setAttribute("aria-pressed", "true");
        dibujarGrilla();
      };
      chips.append(b);
    });
  }

  function visibles() {
    const q = texto.trim().toLowerCase();
    return SK.filter((s) =>
      (!filtro || s.tags.includes(filtro)) &&
      (!q || s.titulo.toLowerCase().includes(q) || s.n.includes(q))
    );
  }

  function dibujarGrilla() {
    const g = $("#grilla");
    g.innerHTML = "";
    const lista = visibles();
    if (!lista.length) {
      g.innerHTML = '<p class="vacio">No hay sketches con ese filtro.</p>';
      return;
    }
    for (const s of lista) {
      const b = document.createElement("button");
      b.className = "tarjeta";
      b.setAttribute("aria-label", `Ver ${s.n} ${s.titulo}`);
      const mini = s.mini
        ? `<img src="galeria/miniaturas/${s.n}.jpg" alt="" loading="lazy">`
        : `<span class="sin">${s.n}</span>`;
      b.innerHTML = `
        <div class="mini">${mini}</div>
        <div class="pie-tarjeta"><span class="num">Lám. ${s.n}</span><span class="nombre"></span></div>
        <div class="tags">${s.tags.map((t) => ETIQUETAS[t]).join(" · ")}</div>`;
      b.querySelector(".nombre").textContent = s.titulo;
      b.onclick = () => abrir(SK.indexOf(s));
      g.append(b);
    }
  }

  // ---------- Hydra ----------
  let hydra = null;
  const cc = new Array(128).fill(0.5);
  const audio = {
    fft: [0, 0, 0, 0],
    show() {}, hide() {}, smooth() {}, setSmooth() {}, setCutoff() {}, setScale() {},
    setBins(n) { audio.fft.length = 0; for (let i = 0; i < n; i++) audio.fft.push(0); },
  };
  // Algunos sketches hacen cc[n].smooth() o a.fft[n].smooth(): que no rompa.
  if (!Number.prototype.smooth) Number.prototype.smooth = function () { return +this; };

  function tamano() {
    const w = Math.min(window.innerWidth, 1920);
    const h = Math.round(w * (window.innerHeight / window.innerWidth));
    return [Math.max(w, 2), Math.max(h, 2)];
  }

  function iniciarHydra() {
    if (hydra) return;
    const [w, h] = tamano();
    hydra = new Hydra({
      canvas: $("#lienzo"), width: w, height: h,
      detectAudio: false, makeGlobal: true, enableStreamCapture: false,
    });
    window.addEventListener("resize", () => hydra.setResolution(...tamano()));
  }

  // Deja todo limpio y con los "extras" que algunos sketches esperan.
  function reiniciar(limpiarFuentes) {
    if (limpiarFuentes) {
      ["s0", "s1", "s2", "s3"].forEach((s) => { try { window[s].clear(); } catch (e) {} });
    }
    if (typeof window.hush === "function") window.hush();
    window.render(window.o0);
    window.speed = 1;
    window.a = audio;
    window.cc = cc;
    window.pb = { setName() {} };
    window.screencap = () => {};     // no descargar capturas solo por abrir el sketch
    window.setResolution = () => {}; // la galería maneja el tamaño
    ["s0", "s1", "s2", "s3"].forEach((s) => { window[s].initStream = () => {}; });
  }

  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

  async function correr(codigo) {
    ocultarError();
    try {
      await new AsyncFunction(codigo)();
    } catch (e) {
      console.error("SKETCH-ERROR", e && e.message);
      mostrarError(e);
    }
  }

  // ---------- Visor ----------
  let actual = -1;
  const ta = $("#codigo");

  // Los archivos con varias versiones las separan con "// === versión N ===".
  function partes(codigo) {
    const p = codigo.split(/^\/\/ === versión \d+ ===\n/m).filter((x) => x.trim());
    return p.length > 1 ? p : [codigo];
  }

  function abrir(i, v = 0) {
    if (i < 0 || i >= SK.length) return;
    actual = i;
    const s = SK[i];
    const vers = partes(s.codigo);
    v = Math.max(0, Math.min(v, vers.length - 1));
    $("#visor").hidden = false;
    document.body.style.overflow = "hidden";
    $("#titulo").textContent = `Lám. ${s.n} — ${s.titulo}`;
    const cont = $("#versiones");
    cont.innerHTML = "";
    if (vers.length > 1) {
      vers.forEach((_, k) => {
        const b = document.createElement("button");
        b.textContent = "v" + (k + 1);
        b.title = `Versión ${k + 1} de ${vers.length}`;
        b.setAttribute("aria-pressed", String(k === v));
        b.onclick = () => abrir(i, k);
        cont.append(b);
      });
    }
    ta.value = vers[v];
    ta.scrollTop = 0;
    $("#abrirHydra").href = "https://hydra.ojack.xyz/?code=" + encodeURIComponent(btoa(encodeURIComponent(vers[v])));
    $("#bajar").href = s.archivo;
    $("#bajar").setAttribute("download", s.archivo.split("/").pop());
    const aviso = s.tags.map((t) => AVISOS[t]).filter(Boolean)[0];
    mostrarAviso(aviso);
    if (!MODO_CAPTURA && location.hash !== "#" + s.n) history.replaceState(null, "", "#" + s.n);
    iniciarHydra();
    reiniciar(true);
    if (MODO_CAPTURA && window.mouse) {
      // Sin mouse real: lo ubicamos en el centro para que se vea algo.
      try { window.mouse.x = innerWidth / 2; window.mouse.y = innerHeight / 2; } catch (e) {}
    }
    correr(vers[v]);
  }

  function cerrar() {
    $("#visor").hidden = true;
    document.body.style.overflow = "";
    if (hydra) {
      reiniciar(true);
      window.solid(0, 0, 0).out(window.o0);
    }
    history.replaceState(null, "", location.pathname + location.search);
    actual = -1;
  }

  let timerAviso;
  function mostrarAviso(t) {
    const el = $("#aviso");
    clearTimeout(timerAviso);
    if (!t) { el.hidden = true; return; }
    el.textContent = t;
    el.hidden = false;
    timerAviso = setTimeout(() => { el.hidden = true; }, 6000);
  }
  function mostrarError(e) {
    const el = $("#error");
    el.textContent = "Error: " + (e && e.message ? e.message : e);
    el.hidden = false;
  }
  function ocultarError() { $("#error").hidden = true; }

  // Igual que en Hydra: línea actual, bloque (entre líneas vacías) o todo.
  function linea() {
    const v = ta.value, p = ta.selectionStart;
    const ini = v.lastIndexOf("\n", p - 1) + 1;
    const fin = v.indexOf("\n", p);
    return v.slice(ini, fin < 0 ? v.length : fin);
  }
  function bloque() {
    const lineas = ta.value.split("\n");
    let n = ta.value.slice(0, ta.selectionStart).split("\n").length - 1;
    let ini = n, fin = n;
    while (ini > 0 && lineas[ini - 1].trim() !== "") ini--;
    while (fin < lineas.length - 1 && lineas[fin + 1].trim() !== "") fin++;
    return lineas.slice(ini, fin + 1).join("\n");
  }

  ta.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.ctrlKey && e.shiftKey) { e.preventDefault(); correr(ta.value); }
    else if (e.key === "Enter" && e.ctrlKey) { e.preventDefault(); correr(linea()); }
    else if (e.key === "Enter" && e.altKey) { e.preventDefault(); correr(bloque()); }
    else if (e.key === "Tab") {
      e.preventDefault();
      ta.setRangeText("  ", ta.selectionStart, ta.selectionEnd, "end");
    }
  });

  document.addEventListener("keydown", (e) => {
    if ($("#visor").hidden) return;
    if (e.ctrlKey && e.shiftKey && (e.key === "H" || e.key === "h")) {
      e.preventDefault(); alternarCodigo(); return;
    }
    if (e.target === ta) { if (e.key === "Escape") ta.blur(); return; }
    if (e.key === "Escape") cerrar();
    else if (e.key === "ArrowRight") abrir(actual + 1);
    else if (e.key === "ArrowLeft") abrir(actual - 1);
  });

  function alternarCodigo() {
    const v = $("#visor");
    v.classList.toggle("sin-codigo");
    $("#verCodigo").setAttribute("aria-pressed", String(!v.classList.contains("sin-codigo")));
  }

  // ---------- Micrófono y MIDI ----------
  let micActivo = false;
  async function activarMic() {
    if (micActivo) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const an = ctx.createAnalyser();
      an.fftSize = 512;
      an.smoothingTimeConstant = 0.6;
      ctx.createMediaStreamSource(stream).connect(an);
      const datos = new Uint8Array(an.frequencyBinCount);
      const usar = Math.floor(datos.length * 0.75); // ignora lo más agudo
      (function bucle() {
        an.getByteFrequencyData(datos);
        const n = audio.fft.length || 4;
        const ancho = Math.max(1, Math.floor(usar / n));
        for (let b = 0; b < n; b++) {
          let suma = 0;
          for (let k = b * ancho; k < (b + 1) * ancho; k++) suma += datos[k];
          audio.fft[b] = suma / ancho / 255;
        }
        requestAnimationFrame(bucle);
      })();
      micActivo = true;
      $("#mic").setAttribute("aria-pressed", "true");
    } catch (e) {
      mostrarError("No pude usar el micrófono (" + e.message + ")");
    }
  }

  async function activarMidi() {
    if (!navigator.requestMIDIAccess) { mostrarError("Este navegador no soporta MIDI (probá con Chrome o Brave)."); return; }
    try {
      const acceso = await navigator.requestMIDIAccess();
      const conectar = () => acceso.inputs.forEach((inp) => {
        inp.onmidimessage = (m) => {
          const [st, n, v] = m.data;
          if ((st & 0xf0) === 0xb0) cc[n] = v / 127;
        };
      });
      conectar();
      acceso.onstatechange = conectar;
      $("#midi").setAttribute("aria-pressed", "true");
      mostrarAviso(acceso.inputs.size ? "MIDI conectado." : "MIDI activo, pero no veo ningún controlador conectado.");
    } catch (e) {
      mostrarError("No pude activar MIDI (" + e.message + ")");
    }
  }

  // ---------- Botones ----------
  $("#cerrar").onclick = cerrar;
  $("#ant").onclick = () => abrir(actual - 1);
  $("#sig").onclick = () => abrir(actual + 1);
  $("#ejecutar").onclick = () => correr(ta.value);
  $("#verCodigo").onclick = alternarCodigo;
  $("#mic").onclick = activarMic;
  $("#midi").onclick = activarMidi;
  $("#completa").onclick = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else $("#visor").requestFullscreen().catch(() => {});
  };
  $("#copiar").onclick = async () => {
    try { await navigator.clipboard.writeText(ta.value); mostrarAviso("Código copiado."); }
    catch (e) { ta.select(); document.execCommand("copy"); mostrarAviso("Código copiado."); }
  };
  $("#buscar").addEventListener("input", (e) => { texto = e.target.value; dibujarGrilla(); });
  window.addEventListener("error", (e) => { if (!$("#visor").hidden) mostrarError(e.message); });

  // El panel de código empieza justo debajo de la barra (que puede ocupar 1 o 2 renglones).
  new ResizeObserver(() => {
    $("#visor").style.setProperty("--alto-barra", $(".barra").offsetHeight + "px");
  }).observe($(".barra"));

  // ---------- Inicio ----------
  $("#total").textContent = SK.length;
  $("#verCodigo").setAttribute("aria-pressed", "true");
  if (window.innerWidth < 700) alternarCodigo();

  if (MODO_CAPTURA) {
    // Modo usado por tools/miniaturas.sh: solo el lienzo, sin interfaz.
    document.body.classList.add("captura");
    const i = SK.findIndex((s) => s.n === params.get("captura"));
    abrir(i);
    return;
  }

  dibujarChips();
  dibujarGrilla();
  const desdeHash = SK.findIndex((s) => "#" + s.n === location.hash);
  if (desdeHash >= 0) abrir(desdeHash);
})();
