#!/usr/bin/env python3
"""Regenera los datos de la galería y la lista del README a partir de sketches/.

Uso:  python3 tools/generar.py
Correlo cada vez que agregues, borres o renombres un sketch.
Nombre de archivo esperado:  sketches/NNN - Título.js
"""
import json, re
from pathlib import Path
from urllib.parse import quote

RAIZ = Path(__file__).resolve().parent.parent
SKETCHES = RAIZ / "sketches"
DATOS = RAIZ / "galeria" / "datos.js"
README = RAIZ / "README.md"
MINIS = RAIZ / "galeria" / "miniaturas"

ETIQUETAS = [
    ("mouse", r"\bmouse\.[xy]"),
    ("imagen", r"\.initImage\("),
    ("pantalla", r"\.initScreen\("),
    ("audio", r"\ba\.(fft|show|setBins)"),
    ("midi", r"\bcc\["),
    ("glsl", r"\bsetFunction\("),
    ("versiones", r"^// === versión 2 ===$"),
]

def leer():
    lista = []
    for f in sorted(SKETCHES.glob("*.js")):
        m = re.match(r"(\d+) - (.+)\.js$", f.name)
        if not m:
            print(f"!! Nombre raro, lo salteo: {f.name}  (usá 'NNN - Título.js')")
            continue
        codigo = f.read_text(encoding="utf-8")
        lista.append({
            "n": m.group(1),
            "titulo": m.group(2),
            "archivo": f"sketches/{f.name}",
            "tags": (tags := [t for t, rx in ETIQUETAS if re.search(rx, codigo, re.M)]),
            # Los que usan la pantalla salen negros sin ella: mejor sin miniatura.
            "mini": (MINIS / f"{m.group(1)}.jpg").exists() and "pantalla" not in tags,
            "codigo": codigo,
        })
    return lista

def escribir_datos(lista):
    DATOS.parent.mkdir(exist_ok=True)
    js = json.dumps(lista, ensure_ascii=False, indent=1)
    DATOS.write_text(f"// Generado por tools/generar.py — no editar a mano.\nwindow.SKETCHES = {js};\n", encoding="utf-8")

def escribir_readme(lista):
    filas = "\n".join(
        f"| {s['n']} | [{s['titulo']}]({quote(s['archivo'])}) | {', '.join(s['tags'])} |" for s in lista
    )
    tabla = f"<!-- LISTA -->\n| # | Sketch | Usa |\n|---|---|---|\n{filas}\n<!-- /LISTA -->"
    txt = README.read_text(encoding="utf-8")
    txt = re.sub(r"<!-- LISTA -->.*<!-- /LISTA -->", lambda _: tabla, txt, flags=re.S)
    README.write_text(txt, encoding="utf-8")

if __name__ == "__main__":
    lista = leer()
    escribir_datos(lista)
    escribir_readme(lista)
    print(f"OK: {len(lista)} sketches -> {DATOS.relative_to(RAIZ)} y README.md")
