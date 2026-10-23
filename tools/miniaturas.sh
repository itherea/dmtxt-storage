#!/usr/bin/env bash
# Genera las miniaturas de la galería (galeria/miniaturas/NNN.jpg) con un navegador
# Chromium (Brave, Chromium o Chrome) en modo invisible.
# Uso:  bash tools/miniaturas.sh            -> todas
#       bash tools/miniaturas.sh 012 070    -> solo esas
#       TIEMPO=20000 bash tools/miniaturas.sh 004  -> espera más (sketches que tardan en armarse)
set -uo pipefail
cd "$(dirname "$0")/.."
RAIZ=$PWD

NAV=""
for b in brave brave-browser chromium chromium-browser google-chrome; do
  command -v "$b" >/dev/null && { NAV=$b; break; }
done
[[ -n $NAV ]] || { echo "Necesito Brave, Chromium o Chrome instalado."; exit 1; }

# Carpeta temporal dentro del repo (los navegadores snap no ven /tmp)
TMP="$RAIZ/.miniaturas-tmp"
mkdir -p "$TMP" galeria/miniaturas
trap 'rm -rf "$TMP"' EXIT

if (( $# )); then NUMS=("$@"); else
  mapfile -t NUMS < <(ls sketches | sed -n 's/^\([0-9]\+\) - .*\.js$/\1/p')
fi

ERRORES=()
for n in "${NUMS[@]}"; do
  printf '%s ' "$n"
  LOG=$(timeout 90 "$NAV" --headless=new --use-angle=swiftshader --enable-unsafe-swiftshader \
    --hide-scrollbars --mute-audio --window-size=640,360 --virtual-time-budget="${TIEMPO:-9000}" \
    --enable-logging=stderr --v=0 --screenshot="$TMP/$n.png" \
    "file://$RAIZ/index.html?captura=$n" 2>&1)
  grep -q "SKETCH-ERROR" <<<"$LOG" && ERRORES+=("$n: $(grep -o 'SKETCH-ERROR.*' <<<"$LOG" | head -1 | cut -c14-120)")
  if [[ -f $TMP/$n.png ]]; then
    python3 - "$TMP/$n.png" "galeria/miniaturas/$n.jpg" <<'PY'
import sys
from PIL import Image
Image.open(sys.argv[1]).convert("RGB").save(sys.argv[2], "JPEG", quality=78, optimize=True, progressive=True)
PY
  else
    ERRORES+=("$n: no se pudo capturar")
  fi
done
echo
python3 tools/generar.py
if (( ${#ERRORES[@]} )); then
  echo "Sketches con errores:"; printf ' - %s\n' "${ERRORES[@]}"
fi
