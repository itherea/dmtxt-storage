// Generado por tools/generar.py — no editar a mano.
window.SKETCHES = [
 {
  "n": "001",
  "titulo": "Digital Valley zero",
  "archivo": "sketches/001 - Digital Valley zero.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.5, 0, .9)\n\t.layer(osc((\"st.x/.05+st.y*1.5\"), .015)\n\t\t.luma()\n\t\t.colorama((\"st.x*.5*st.y*.5\")))\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, (\"st.x/.01*st.y*1.5\"))\n\t.color(1, .891, .91)\n\t.rotate((\"st.x*.085*st.y*1.15\"))\n\t.scroll((\"st.x*.05/st.y*.5\", (\"st.x*.05\"), 1, .01))\n\t.blend(noise(1000, 1),.25)\n\t.colorama(.001)\n\t.diff(voronoi(1,.01,2.05))\n\t.contrast(1.25)\n\t.color(1, .891, .91)\n\t.diff(osc((\"st.x*.9/st.y*.05\")))\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, (\"st.x/.01*st.y*1.5\"))\n\t.out(o0)\n\n\nsetResolution(1600,900)\n\n// screencap()\n"
 },
 {
  "n": "002",
  "titulo": "Pixelated trama",
  "archivo": "sketches/002 - Pixelated trama.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.1, .25, .25)\n\t.diff(shape(100, .51, .0001)\n\t\t.scale(1, .5)\n\t\t.scrollX(1, .001)\n\t\t.scrollY(1, .1)\n\t\t.luma()\n\t\t.color(1, 1, .1)\n\t\t.repeat())\n\t.diff(shape(100, .51, .0001)\n\t\t.scale(1, .5)\n\t\t.scrollX(1, .1)\n\t\t.scrollY(1, .1)\n\t\t.luma()\n\t\t.color(0.9, .25, .1)\n\t\t.repeat())\n\t.diff(shape(1, .00151, 1)\n\t\t.scale(1, .5)\n\t\t.scrollX(1, .21)\n\t\t.scrollY(1.25, .1)\n\t\t.luma()\n\t\t.color(1.025, .8, .01)\n\t\t.repeat())\n\t.diff(shape(100, .51, .0001)\n\t\t.scale(1, .005)\n\t\t.scrollX(1, .25)\n\t\t.scrollY(1.25, .01)\n\t\t.luma()\n\t\t.color(1, .1, .1)\n\t\t.repeat())\n\t.modulate(osc(2.5,.25,1).luma([2,1,0].fast(.25)),2.5,1.5)\n\t.out(o0)\n\nsolid()\n.layer(src(o0).luma())\n.layer(voronoi(100,1,10).luma())\n.blend(o1,.35).blend(o1,.45).blend(o1,.1).blend(o1,.1)\n.kaleid([1,2,3,4,5,6,7,8,9,0].fast(.001).ease(.001))\n.modulatePixelate(o0,100,[10,1].fast(.25).ease(),1)\n.contrast(.5)\n.colorama(1)\n.out(o2)\n\nrender(o2)\n\nspeed=1\n\nsetResolution(1920,1080)\n\nscreencap()\n"
 },
 {
  "n": "003",
  "titulo": "Experimento de los cuadrados",
  "archivo": "sketches/003 - Experimento de los cuadrados.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(0,0,0)\n.blend(noise(1000,1),.25)\n.layer(shape(4,.2,0).luma().mult(gradient(1.8).hue(1.5)).scale(1,.6).scrollX(1.2).color(0,1,1))\n.layer(shape(4,.2,0).luma().mult(gradient(.1).hue(1.2)).scale(1,.6).scrollX(1.4).color(-1,.81,0))\n.layer(shape(4,.2,0).luma().mult(gradient(2).hue(1.9)).scale(1,.6).scrollX(1).color(1,1,.1))\n.layer(shape(4,.2,0).luma().mult(gradient(1.5).hue()).scale(1,.6).scrollX(-.2).color(1,1,.1))\n.layer(shape(4,.2,0).luma().mult(gradient(2).hue(2.9)).scale(1,.6).scrollX(-.4).color(1.5,1.5,1))\n.layer(shape(4,.2,0).luma().mult(gradient(2).hue(2.9)).scale(1,.6).scrollX(-.4).color(0,1,1).scrollY(1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(3.8).hue(1.5)).scale(1,.6).scrollX(1.2).color(1,0,1).scrollY(1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(.1).hue(1.2)).scale(1,.6).scrollX(1.4).color(1,.4,0).scrollY(1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(2).hue(1.9)).scale(1,.6).scrollX(1).color(1,.87,.1).scrollY(1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(1.5).hue()).scale(1,.6).scrollX(-.2).color(.91,.5,.1).scrollY(1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(2).hue(2.9)).scale(1,.6).scrollX(-.4).color(0,1,1).scrollY(-1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(1.8).hue(1.5)).scale(1,.6).scrollX(1.2).color(1,0,1).scrollY(-1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(1).hue(1.2)).scale(1,.6).scrollX(1.4).color(1,.4,0).scrollY(-1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(.2).hue(1.9)).scale(1,.6).scrollX(1).color(1,.7,.1).scrollY(-1.3))\n.layer(shape(4,.2,0).luma().mult(gradient(1.5).hue()).scale(1,.6).scrollX(-.2).color(.51,.5,.1).scrollY(-1.3))\n.hue().contrast().saturate().brightness(.1)\n  .out(o0)\n\nsetResolution(1600,900)\n\nscreencap()\n"
 },
 {
  "n": "004",
  "titulo": "Red bourbon",
  "archivo": "sketches/004 - Red bourbon.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(0, 0, 0)\n\t.layer(shape(2, .20, .002)\n\t\t.luma()\n\t\t.repeat(1, 25))\n\t.modulate(osc(20, .05, -1)\n\t\t.rotate(Math.PI))\n\t.modulateKaleid(o0, [1,8,10,2].ease().fast(.01))\n\t.modulateRotate(o0,1,10)\n\t.out(o0)\n"
 },
 {
  "n": "005",
  "titulo": "Flashy",
  "archivo": "sketches/005 - Flashy.js",
  "tags": [
   "imagen"
  ],
  "mini": true,
  "codigo": "s0.initImage('https://raw.githubusercontent.com/arielcontini/img/main/deme.png')\n\nsrc(s0)\n\t.scale(1, .45)\n\t.blend(noise(1000, 1), .2)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, [100 * -.85, 100, 1].ease()\n\t\t.fast(10))\n\t.color(1, 1, 1)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulate(osc(2,.1,.1))\n\t.out()\n"
 },
 {
  "n": "006",
  "titulo": "Strange Texture Experiments",
  "archivo": "sketches/006 - Strange Texture Experiments.js",
  "tags": [
   "mouse",
   "midi"
  ],
  "mini": true,
  "codigo": "solid(() => cc[29] * 2, () => cc[28] * 2, () => cc[27] * 2)\n\t.layer(shape(() => cc[24] * 40, () => cc[25] * .5, () => cc[26] * 2)\n\t\t.scroll(() => cc[31], () => cc[32])\n\t\t.rotate(() => cc[33] * 2.5)\n\t\t.luma())\n\t.color(() => cc[11], () => cc[12], () => cc[14])\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, () => cc[15] * 25)\n\t.colorama(.005)\n\t.diff(shape(10, .0001, .5)\n\t\t.luma()\n\t\t.color(0, .25, .25)\n\t\t.scroll(() => mouse.x * .005, () => mouse.y * .005).modulate(osc(10,.1),.1))\n\t.mult(shape(4,.75,.8).scale(1,1.1,1.2))\n\t.blend(noise(1).shift(.1,.1,-.1).hue(.1),()=>cc[17]*.015)\n\t.out(o0)\n\nsetResolution(1280, 800)\n\nspeed=-2\n"
 },
 {
  "n": "007",
  "titulo": "Expansion Glitched",
  "archivo": "sketches/007 - Expansion Glitched.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(0, 0, 1)\n  .layer(\n    shape(100, 0.25, 0.1)\n      .scale([1, 0.5, 2, 3].smooth(), 0.5)\n      .repeat(1, 1)\n      .luma()\n      .scrollX(1, 0.1)\n  )\n  .layer(\n    shape(100, 0.2, 0.9)\n      .scale([1, 0.5, 2, 3].smooth(), 0.5)\n      .repeat(1, 1)\n      .luma()\n      .scrollX(1, 0.1)\n      .invert()\n  )\n  .mult(noise(1000, 1), 0.15)\n  .colorama(Math.tanh(-0.1))\n  .thresh()\n  .color(1, -0.71, -0.51)\n  .posterize()\n  .modulate(osc(1000, 0.91, 0.1), 0.021)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .modulateHue(o0, 5)\n  .colorama()\n  .out(o0);\n"
 },
 {
  "n": "008",
  "titulo": "Moovin and glitching",
  "archivo": "sketches/008 - Moovin and glitching.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1, 0.51, 0.1)\n  .layer(osc(50, 0.91, 10).luma())\n  .layer(osc(10, 0.89, 10).luma().rotate())\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .modulateHue(o0, 100)\n  .diff(\n    voronoi(1, 0.1, 10).modulate(osc(1, 0.1, 10))\n  )\n  .add(\n    shape(\n      [100, 3, 0.1].fit().fast(10),\n      -0.015,\n      0.91\n    ).color(\n      [1, 0.21].fit().fast(0.1),\n      [0.1, 3.1].fit().fast(.1),\n      [0.01, 5.1].fit().fast(.5)\n    )\n  )\n  .layer(\n    osc([40, 90, 10], 0.1, 0.91)\n      .luma()\n      .rotate(() => Math.sin(3.14) * 30)\n      .rotate(1, .75)\n  )\n  .mask(\n    shape(100).scale(\n      1,\n      [0.66, 0.51].smooth().fast(10),\n      [0.96, 0.81].smooth().fast(10)\n    )\n  .modulate(osc(10,1))\n  )\n  .scale([1, 2].fast().smooth())\n  .diff(o0)\n  .color(0.51, 1, 0.51)\n  .diff(noise([1,10,50].ease().fit(1)).luma())\n  .diff(o0)\n  .scrollX(1, -0.1)\n.blend(o0).blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,200)\n  .out(o0);\n"
 },
 {
  "n": "009",
  "titulo": "Moved and Bored",
  "archivo": "sketches/009 - Moved and Bored.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1, .5, .001)\n\t.layer(osc(\"st.x*1.9/st.y*.05\", 1, \"st.x*.0005/st.y*.0005\")\n\t\t.luma()\n\t\t.color(1.75, 1.01, .1))\n\t.rotate(1, 1)\n\t.scrollX(.1, 1)\n\t.layer(noise(\"st.y/1.5/st.y*1.5\")\n\t\t.colorama(.1)\n\t\t.luma()\n\t\t.colorama(1))\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, 10)\n\t.out(o0)\n\nsetResolution(1600,900)\n\n\n//screencap()\n"
 },
 {
  "n": "010",
  "titulo": "El movimiento del agua lineal",
  "archivo": "sketches/010 - El movimiento del agua lineal.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1, .45, .5)\n\t.layer(osc(\"st.x*.09/st.y*5.5\", .01, .2)\n\t\t.luma()\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.modulateHue(o0, 20))\n\t.contrast(1.05)\n\t.brightness(.01)\n\t.color(0, .99, .99)\n\t.blend(noise(10), .019)\n\t.modulateRotate(o0, 1, .01)\n\t.scrollY(-.01,-.0001)\n\t.blend(o0).blend(o0).blend(o0).blend(o0).blend(o0)\n\t.modulateHue(o0,10)\n\t.out(o0)\n"
 },
 {
  "n": "011",
  "titulo": "Digital Tribe",
  "archivo": "sketches/011 - Digital Tribe.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1, .1, .01)\nshape(10)\n\t.scale(4, .5)\n\t.pixelate(50, 50)\n\t.repeat(20, 20)\n\t.luma()\n\t.blend(noise(1), .055)\n\t.color(1, .71, .51)\n\t.layer(shape(3, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(100, 100)\n\t\t.repeat(50, 50)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.51, .91, .51))\n\t.layer(shape(30, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(100, 100)\n\t\t.repeat(5, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(1, .51, .1))\n\t.blend(noise(10000), .091)\n\t.layer(shape(5, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(10, 10)\n\t\t.repeat(50, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.91, .91, .41))\n\t.layer(shape(3, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(10, 10)\n\t\t.repeat(5, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.51, .271, .060))\n\t.saturate(.99)\n.pixelate(100,100)\n.blend(noise(100000,1),.15)\n.pixelate(100,100)\n.blend(noise(100000,1),.15)\n.blend(noise(100000,1),.015)\n.blend(noise(100000,1),.015)\n.rotate(1,.01).color(1,.81,.91)\n.modulateScrollX(o0,.01,-.01).modulate(voronoi(1,.001,10),1)\n  .out()\n"
 },
 {
  "n": "012",
  "titulo": "Statics",
  "archivo": "sketches/012 - Statics.js",
  "tags": [],
  "mini": true,
  "codigo": "noise(1,1).thresh()\n.layer(shape(9,[.15,.78,1,0].smooth(),0).scale(1,.60).modulate(o0,.5).luma())\n.scale(.95,1)\n.blend(o0).blend(o0).blend(o0)\n.colorama([0.15,0.05,.00001].fast(1).smooth())\n.modulateHue(o0,10)\n.out(o0)\n"
 },
 {
  "n": "013",
  "titulo": "Textura con variables",
  "archivo": "sketches/013 - Textura con variables.js",
  "tags": [],
  "mini": true,
  "codigo": "let dmtxt = \"st.y/.1/st.x*.1\"\n\nsolid(-1, .95, .1)\n\t.layer(shape(9, .25, 1)\n\t\t.luma()\n\t\t.rotate(dmtxt, dmtxt)\n\t\t.modulate(osc(dmtxt, 1)))\n\t.colorama(dmtxt)\n\t.diff(osc(10, .25, 10)\n\t\t.modulateHue(o0, dmtxt))\n\t.contrast(1.75)\n\t.modulateRotate(o0,dmtxt,dmtxt,dmtxt)\n\t.out(o0)\n\nsetResolution(1600,900)\n\n// screencap()\n"
 },
 {
  "n": "014",
  "titulo": "Camino dorado",
  "archivo": "sketches/014 - Camino dorado.js",
  "tags": [],
  "mini": true,
  "codigo": "osc(100,.9,1)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.modulateHue(o0,100)\n.blend(noise(10,1),1.5)\n.scrollX(\"st.x*.05/st.y*2.5\")\n.color(1.1,.9,.19)\n.modulateScale(o0,5.85,2.950)\n.modulateScale(o0,5.95,2.95)\n.scrollX(\"st.x*.005*st.y*0.005\")\n.hue(\"st.x*.005*st.y*.005\")\n.blend(noise(1000),.5)\n.scrollY(\"st.x*.5/st.y*.5\").scale(\"st.x*.5*st.y*.5\")\n.out(o0)\n\nsetResolution(1600,900)\n\nspeed=1\n"
 },
 {
  "n": "015",
  "titulo": "Otra esfera texturizada Otra Vez",
  "archivo": "sketches/015 - Otra esfera texturizada Otra Vez.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n\t.layer(shape(100)\n\t\t.scale(1, .6)\n\t\t.repeat(5, 5)\n\t\t.luma()\n\t\t.scrollY(1, .2))\n\t.layer(shape(100)\n\t\t.scale(1, .6)\n\t\t.repeat(10, 10)\n\t\t.luma()\n\t\t.scrollX(1, .2))\n\t.layer(shape(100)\n\t\t.scale(1, .6)\n\t\t.repeat(100, 100)\n\t\t.luma()\n\t\t.scrollX(1, .002))\n\t.mult(shape(100, 1)\n\t\t.scale(1, .6)\n\t\t.repeat(1, 1)\n\t\t.luma())\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.shift(-.01, -.01, -.001)\n\t.modulateHue(osc(10), 100)\n\t.modulateRotate(o0, .0001, .01)\n\t.mult(shape(100, 1)\n\t\t.scale(1, .6)\n\t\t.repeat(1, 1)\n\t\t.luma())\n\t.colorama(.0001)\n\t.blend(noise(10000, 10), .051)\n\t.contrast(1.05)\n\t.diff(shape(100, .21, .1)\n\t\t.scale(2, .6))\n\t.modulate(voronoi(1, 1, 1))\n\t.out(o0)\n"
 },
 {
  "n": "016",
  "titulo": "Pixis",
  "archivo": "sketches/016 - Pixis.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1, .51, .1)\n\t.blend(noise(1, 10), .15)\n\t.layer(osc(100, .1, 1)\n\t\t.thresh()\n\t\t.luma()\n\t\t.color(0, .5, 1))\n\t.layer(osc(100, .1, .1)\n\t\t.thresh()\n\t\t.luma()\n\t\t.color(0, .7, 1)\n\t\t.rotate(1.55))\n\t.layer(osc(90, .1, .1)\n\t\t.thresh()\n\t\t.luma()\n\t\t.color(0, 0, 0)\n\t\t.rotate(2))\n\t.modulateRotate(voronoi(2,.001,10), .95, .1)\n\t.modulatePixelate(osc(10,.01),10,10)\n\t.out(o0)\n\nsetResolution(1600,900)\n\n// screencap()\n"
 },
 {
  "n": "017",
  "titulo": "DMTXT HIDDEN",
  "archivo": "sketches/017 - DMTXT HIDDEN.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1,.1,.1)\n.layer(shape(100,.81,1).scale(1,.6).luma().color(1,1,.1).scrollY(1,1))\n.layer(shape(100,.61,1).scale(1,.6).luma().color(1,.1,1).scrollX(1,1))\n.layer(shape(100,.51,1).scale(1,.6).luma().color(.1,1,1).scrollY(1,1))\n.layer(shape(100,.41,1).scale(1,.6).luma().color(1,.1,1).scrollX(1,1))\n.layer(shape(100,.21,1).scale(1,.6).luma().color(1,1,.1).scrollY(1,1))\n.layer(shape(100,.05,1).scale(1,.6).luma().color(.1,1,1).scrollX(1,1))\n.blend(o0).blend(o0).blend(o0).blend(o0).blend(o0)\n.contrast([1.02,1,1.08].smooth().fast(1.5))\n.modulateRotate(o0,.001,.00001)\n.modulateScale(o0,.002,-.91)\n.hue(1.01)\n.blend(noise(100000),.0000)\n.out(o0)\n"
 },
 {
  "n": "018",
  "titulo": "Triangles",
  "archivo": "sketches/018 - Triangles.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.91, .81, .91)\n\t.layer(osc(25)\n\t\t.rotate(1.6)\n\t\t.luma()\n\t\t.modulate(osc(10))\n\t\t.thresh()\n\t\t.invert())\n\t.layer(shape(3)\n\t\t.scale(1.5, .45)\n\t\t.rotate(Math.PI)\n\t\t.luma()\n\t\t.color(1, .1, .1))\n\t.layer(osc(25)\n\t\t.rotate(-1.6)\n\t\t.luma()\n\t\t.modulate(osc(10))\n\t\t.thresh()\n\t\t.color(.1, .1, .1))\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, 10)\n\t.colorama()\n\t.mult(shape(3)\n\t\t.scale(1.5, .45)\n\t\t.rotate(Math.PI)\n\t\t.luma()\n\t\t.color(1, .1, .1))\n\t.layer(osc(25)\n\t\t.rotate(1.6)\n\t\t.luma()\n\t\t.modulate(osc(10))\n\t\t.thresh()\n\t\t.invert())\n\t.layer(shape(3)\n\t\t.scale(1.5, .45)\n\t\t.rotate(Math.PI)\n\t\t.luma()\n\t\t.color(1, .1, .1))\n\t.layer(osc(25)\n\t\t.rotate(-1.6)\n\t\t.luma()\n\t\t.modulate(osc(10))\n\t\t.thresh()\n\t\t.color(.1, .1, .1))\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, 10)\n\t.colorama()\n\t.contrast([1.02, 1.05].ease())\n\t.out()\n"
 },
 {
  "n": "019",
  "titulo": "OCTUBRE 2023",
  "archivo": "sketches/019 - OCTUBRE 2023.js",
  "tags": [
   "mouse"
  ],
  "mini": true,
  "codigo": "osc(5,.15,1)\n.blend(osc(5,.015,.001),.135)\n.layer(osc(10,.05,1).luma().modulate(o0,.1))\n.modulatePixelate(o0,10,1)\n.rotate(-.5,.1)\n.blend(o0).blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,2.5)\n.colorama([-.005,.05].smooth().fast(2.5))\n.blend(noise(10000,1),.001)\n.blend(shape(30,.5,.5).scale(1,.5)\n       .scrollX(()=>mouse.x*-.00015)\n       .scrollY(()=>mouse.y*-.00015)\n       .colorama(-5)\n       .modulate(osc(25,.01,1))\n       .blend(o0).blend(o0).blend(o0).blend(o0)\n       .modulateHue(o0,100)\n       ,.71)\n.modulate(o0,.005)\n.brightness(.005)\n.contrast(1.065)\n.out(o0)\n\n\nsetResolution(1920,1080)\n\nspeed=.25\n"
 },
 {
  "n": "020",
  "titulo": "Blue Xpanded Texture",
  "archivo": "sketches/020 - Blue Xpanded Texture.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1,1,1)\n\t.layer(osc(50)\n\t\t.rotate(Math.PI, .05)\n\t\t.thresh()\n\t\t.invert()\n\t\t.luma())\n\t.layer(osc(100)\n\t\t.rotate(Math.PI, .01)\n\t\t.thresh()\n\t\t.luma())\n\t.layer(osc(100)\n\t\t.rotate(Math.PI, .02)\n\t\t.thresh()\n\t\t.invert()\n\t\t.luma())\n\t.layer(voronoi(1, 1, 1)\n\t\t.rotate(Math.PI, .02)\n\t\t.thresh()\n\t\t.invert()\n\t\t.luma())\n\t.invert(1)\n\t.colorama(-.001)\n\t.color(-.1,-.1,-1)\n\t.modulate(osc(10,1,1))\n\t.diff(o0)\n\t.out(o0)\n"
 },
 {
  "n": "021",
  "titulo": "Variables and more blend patterns",
  "archivo": "sketches/021 - Variables and more blend patterns.js",
  "tags": [],
  "mini": true,
  "codigo": "patron = () => osc(5, .01, 1)\n\t.rotate()\n\t.luma()\nsolid()\n\t.layer(patron())\n\t.layer(patron()\n\t\t.rotate(1, .00001))\n\t.layer(patron()\n\t\t.rotate(1, .01))\n\t.modulateHue(o0, 150)\n\t.modulateScale(o0, 1.85)\n\t.contrast(1.9)\n\t.modulateScrollY(o0, 1, .1)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(noise(1000), .0001)\n\t.out(o0)\n"
 },
 {
  "n": "022",
  "titulo": "2 dimensiones y media",
  "archivo": "sketches/022 - 2 dimensiones y media.js",
  "tags": [
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\nsolid()\n\t.layer(shape(2, .1)\n\t\t.luma()\n\t\t.repeat(10, 10)\n\t\t.luma())\n\t.layer(shape(2, .1)\n\t\t.luma()\n\t\t.repeat(10, 10)\n\t\t.rotate(1)\n\t\t.luma())\n\t.layer(shape(100)\n\t\t.scale(1.5, .6)\n\t\t.luma()\n\t\t.diff(gradient()\n\t\t\t.hue())\n\t\t.luma()\n\t\t.modulate(voronoi(1000, 1, 1)))\n\t.hue(.1)\n\t.blend(noise(1, 1), .51)\n\t.diff(voronoi(1000,1))\n\t.blend(noise(100, .1), .1)\n.modulatePixelate(o0,200,200,100,10)\n\t.out(o0)\n\nsetResolution(1600,900)\n\n// === versión 2 ===\nsolid()\n\t.layer(shape(2, .1)\n\t\t.luma()\n\t\t.repeat(10, 10)\n\t\t.luma())\n\t.layer(shape(2, .1)\n\t\t.luma()\n\t\t.repeat(10, 10)\n\t\t.rotate(1)\n\t\t.luma())\n\t.layer(shape(100)\n\t\t.scale(1.5, .6)\n\t\t.luma()\n\t\t.diff(gradient()\n\t\t\t.hue())\n\t\t.luma()\n\t\t.modulate(voronoi(1000, 1, 1)))\n\t.hue(.1)\n\t.blend(noise(1, 1), .51)\n\t.diff(voronoi(10000,1,2))\n\t.blend(noise(10000, .1), .1)\n.modulatePixelate(o0,20,200,100,10)\n\t.out(o0)\n\nsetResolution(1600,900)\n"
 },
 {
  "n": "023",
  "titulo": "Simple blood Blueed",
  "archivo": "sketches/023 - Simple blood Blueed.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(-.891, .6, .91)\n\t.layer(noise(1, .055, .1)\n\t\t.luma()\n\t\t.rotate(1, -.1))\n\t.layer(noise(1, .055, .1)\n\t\t.luma()\n\t\t.rotate(1, .1))\n\t.blend(noise(1, 1))\n\t.blend(o0).blend(o0).blend(o0)\n\t.blend(noise(10000, .01), .01)\n\t.modulateScale(o0).modulateScale(o0).modulateScrollY(o0,-1,.01)\n.blend(noise(10000, .001), .011)\n\t.out(o0)\n"
 },
 {
  "n": "024",
  "titulo": "Piramides y Luna",
  "archivo": "sketches/024 - Piramides y Luna.js",
  "tags": [
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\nshape(2, .021, 0.05)\n\t.repeat(10, 100)\n\t.thresh()\n\t.layer(shape(3)\n\t\t.luma()\n\t\t.scale(1, .5)\n\t\t.rotate(Math.PI))\n\t.layer(shape(100, .4)\n\t\t.luma()\n\t\t.scale(1, .55)\n\t\t.rotate(Math.PI)\n\t\t.scrollX(-.25)\n\t\t.scrollY(.28))\n\t.layer(shape(2)\n\t\t.luma()\n\t\t.scrollY(-.20))\n\t.diff(gradient()\n\t\t.hue())\n\t.layer(shape(2, .491)\n\t\t.luma()\n\t\t.scrollY(.75))\n\t.diff(gradient()\n\t\t.hue())\n\t.blend(noise(10000, 1)\n\t\t.luma(), .12)\n\t.blend(o0)\n\t.blend(o0)\n\t.color(.999, .99, .99)\n\t.modulate(o0, .000905)\n\t.blend(noise(10000, 1)\n\t\t.luma(), .10)\n\t.layer(shape(3)\n\t\t.luma()\n\t\t.scale(1, .5)\n\t\t.rotate(Math.PI)\n\t\t.scrollX(.21)\n\t\t.color(0, 0, 0)\n\t\t.blend(noise(1)\n\t\t\t.diff(o0)\n\t\t\t.luma(), .10))\n\t.hue(.01)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, 5).modulateRotate(o0,.01,.001)\n.contrast(1.015)\n\t.out(o0)\n\n// === versión 2 ===\nshape(2, .091, 0.05)\n\t.repeat(10, 100)\n\t.thresh()\n\t.layer(shape(3)\n\t\t.luma()\n\t\t.scale(1, .5)\n\t\t.rotate(Math.PI))\n\t.layer(shape(100, .4)\n\t\t.luma()\n\t\t.scale(1, .55)\n\t\t.rotate(Math.PI)\n\t\t.scrollX(-.25)\n\t\t.scrollY(.28))\n\t.layer(shape(2)\n\t\t.luma()\n\t\t.scrollY(-.20))\n\t.diff(gradient()\n\t\t.hue())\n\t.layer(shape(2, .491)\n\t\t.luma()\n\t\t.scrollY(.75))\n\t.diff(gradient()\n\t\t.hue())\n\t.blend(noise(10000, 1)\n\t\t.luma(), .12)\n\t.blend(o0)\n\t.blend(o0)\n\t.color(.999, .99, .99)\n\t.modulate(o0, .000905)\n\t.blend(noise(10000, 1)\n\t\t.luma(), .10)\n\t.layer(shape(3)\n\t\t.luma()\n\t\t.scale(1, .5)\n\t\t.rotate(Math.PI)\n\t\t.scrollX(.21)\n\t\t.color(0, 0, 0)\n\t\t.blend(noise(1)\n\t\t\t.diff(o0)\n\t\t\t.luma(), .10))\n\t.hue(.01)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n.contrast(1.015).hue(.005).saturate(.9)\n\t.out(o0)\n"
 },
 {
  "n": "025",
  "titulo": "HYDRABRIL 2022",
  "archivo": "sketches/025 - HYDRABRIL 2022.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n\t.layer(voronoi(1, .5, .0001)\n\t\t.pixelate(25, 25)\n\t\t.luma())\n\t.layer(voronoi(5, .5, .0001)\n\t\t.pixelate(25, 25)\n\t\t.luma())\n\t.diff(gradient()\n\t\t.colorama(.1)\n\t\t.blend(noise(100000), .15))\n.scale(.251).pixelate(1000,100)\n\t.out(o0)\n"
 },
 {
  "n": "026",
  "titulo": "Pixelated weather",
  "archivo": "sketches/026 - Pixelated weather.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n  .layer(noise(1)\n    .luma()\n    .rotate(Math.PI)\n    .thresh())\n  .layer(osc(1, .1, 1)\n    .rotate(Math.PI)\n    .luma()\n    .thresh())\n  .layer(osc(1, 1, 1.5)\n    .rotate(Math.PI)\n    .luma()\n    .thresh())\n  .layer(voronoi(1, .01)\n    .rotate(Math.PI)\n    .luma()\n    .thresh())\n  .layer(noise(1)\n    .luma()\n    .rotate(Math.PI)\n    .thresh())\n  .pixelate(25, 25)\n  .rotate(1.58)\n  .blend(noise(10000), .25)\n  .color(1, -1, -1)\n  .add(gradient(.5))\n  .diff(noise(1))\n  .modulate(voronoi(1, 1, .1)\n    .blend(noise(10000), .15))\n  .out()\n"
 },
 {
  "n": "027",
  "titulo": "Noise is here",
  "archivo": "sketches/027 - Noise is here.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.1, .1, .1)\n\t.layer(voronoi(2, -1, 3)\n\t\t.diff(o0)\n\t\t.luma())\n\t.contrast(1.092)\n\t.modulateScale(noise(10000, .0001), -.1)\n\t.modulate(voronoi(1, .001), -1)\n\t.diff(gradient(.001)\n\t\t.hue()\n\t\t.blend(noise(1000, 0.01), .21)\n\t\t.diff(o0))\n\t.blend(o0)\n\t.blend(o0)\n\t.saturate(.999)\n\t.brightness(-.00021)\n\t.contrast(1.05)\n\t.modulateRotate(o0, .0001, .00001)\n\t.out(o0)\n"
 },
 {
  "n": "028",
  "titulo": "Pixelated ball front",
  "archivo": "sketches/028 - Pixelated ball front.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1.89, .50, 5.4)\n\t.mult(shape(5)\n\t\t.scale([1].ease(), [.6, .1].ease(), [.6, .5].ease())\n\t\t.luma())\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulate(noise(1, 1, .01)\n\t\t.modulateRotate(o0, 1, 1))\n\t.hue()\n\t.rotate(time / 10)\n\t.contrast(1.005)\n\t.pixelate(100, 100)\n\t.out(o0)\n"
 },
 {
  "n": "029",
  "titulo": "trama para remera (s)",
  "archivo": "sketches/029 - trama para remera (s).js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1, .1, .01)\nshape(10)\n\t.scale(4, .5)\n\t.pixelate(50, 50)\n\t.repeat(20, 20)\n\t.luma()\n\t.blend(noise(1), .055)\n\t.color(1, .71, .51)\n\t.layer(shape(3, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(100, 100)\n\t\t.repeat(50, 50)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.51, .91, .51))\n\t.layer(shape(30, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(100, 100)\n\t\t.repeat(5, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(1, .51, .1))\n\t.blend(noise(10000), .091)\n\t.layer(shape(5, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(10, 10)\n\t\t.repeat(50, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.91, .91, .41))\n\t.layer(shape(3, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(10, 10)\n\t\t.repeat(5, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.51, .271, .060))\n\t.saturate(.99)\n// .pixelate(100,100)\n// .blend(noise(100000,1),.15)\n// .pixelate(100,100)\n// .blend(noise(100000,1),.15)\n// .blend(noise(100000,1),.015)\n// .blend(noise(100000,1),.015)\n// .rotate(1,.01).color(1,.81,.91)\n// .modulateScrollX(o0,.01,-.01).modulate(voronoi(1,.0001,10),1)\n  .out()\n"
 },
 {
  "n": "030",
  "titulo": "trama tribal cyber",
  "archivo": "sketches/030 - trama tribal cyber.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(1, .1, .01)\nshape(100)\n\t.scale(4, .5)\n\t.pixelate(5, 5)\n\t.repeat(20, 20)\n\t.luma()\n\t.blend(noise(10000), .055)\n\t.color(1, .71, .51)\n\t.layer(shape(3, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(10, 10)\n\t\t.repeat(50, 50)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.51, .91, .51))\n\t.layer(shape(3, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(10, 10)\n\t\t.repeat(5, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(1, .51, .1))\n\t.blend(noise(10000), .091)\n\t.layer(shape(3, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(10, 10)\n\t\t.repeat(50, 50)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.91, .91, .41))\n\t.layer(shape(3, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(10, 10)\n\t\t.repeat(5, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.51, .71, .60))\n\t.saturate(.8)\n\t.layer(shape(30, 1)\n\t\t.scale(1, .5)\n\t\t.pixelate(5, 5)\n\t\t.repeat(5, 5)\n\t\t.luma()\n\t\t.blend(noise(10000), .095)\n\t\t.color(.51, .71, .60))\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, [0, 10].ease())\n\t.modulateRotate(o0,1)\n\t.out()\n"
 },
 {
  "n": "031",
  "titulo": "texture fueguinas",
  "archivo": "sketches/031 - texture fueguinas.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.51, .2, .5)\n\t.layer(shape(9)\n\t\t.scrollY()\n\t\t.scrollY(.1, .1)\n\t\t.luma()\n\t\t.scale(1, .6)\n\t\t.color(1, .1, .51)\n\t\t.repeat(2, 2)\n\t\t.rotate(time / 8))\n\t.layer(shape(3)\n\t\t.scrollX()\n\t\t.scrollY(1, -.2)\n\t\t.luma()\n\t\t.scale(1, .6)\n\t\t.color(1, .1, .51)\n\t\t.repeat(2, 2)\n\t\t.rotate(time / 8))\n\t.layer(shape(100)\n\t\t.scrollX(.01, -.1)\n\t\t.luma()\n\t\t.scale(1, .6)\n\t\t.color(1, .1, .51)\n\t\t.repeat(2, 2)\n\t\t.rotate(time / 8))\n\t.blend(noise(10000), .151)\n\t.blend(o0)\n\t.modulateRotate(o0, .1, .01)\n\t.colorama(.0785)\n\t.pixelate(1000, 10)\n\t.blend(noise(10000), .1)\n\t.kaleid(3)\n\t.modulateRotate(voronoi(1))\n\t.out(o0)\n"
 },
 {
  "n": "032",
  "titulo": "Perfiles",
  "archivo": "sketches/032 - Perfiles.js",
  "tags": [],
  "mini": true,
  "codigo": "osc(1, .1, 1)\n\t.modulate(shape(3, .01, 1)\n\t\t.rotate(.1, .1)\n\t\t.luma())\n\t.colorama(.001)\n\t.modulate(osc(10)\n\t\t.rotate(.001, .001))\n\t.colorama(1)\n\t//.layer(src(o0).colorama(.0001).scrollX(.01,-.00001).luma().modulate(noise(1),.001).rotate(.00001,.000001))\n\t.modulate(noise(1), .01)\n\t.out(o0)\n"
 },
 {
  "n": "033",
  "titulo": "geometrias",
  "archivo": "sketches/033 - geometrias.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(1)\n\t\t.luma()\n\t\t.color(.1, 1, 1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(-1)\n\t\t.luma()\n\t\t.color(1, -1, .1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(.1)\n\t\t.luma()\n\t\t.color(.1, 1, 1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(-.1)\n\t\t.luma()\n\t\t.color(1, -1, .1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(-.51)\n\t\t.luma()\n\t\t.color(.1, 1, 1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(.51)\n\t\t.luma()\n\t\t.color(1, -1, .1))\n\t.layer(shape(100, .15, .25)\n\t\t.scale(1, .5)\n\t\t.luma())\n\t.rotate(1, 1)\n\t.scale(1, .91)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(noise(100000), .018)\n\t.colorama(.0001)\n\t.blend(o0)\n\t.modulateScale(o0, .1, 1)\n\t.out(o0)\n"
 },
 {
  "n": "034",
  "titulo": "CRYSTAL ON 2.5 DIMENSIONS",
  "archivo": "sketches/034 - CRYSTAL ON 2.5 DIMENSIONS.js",
  "tags": [
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\nsolid()\n\t.layer(shape(2, .015, .1)\n\t\t.repeat(10, 10)\n\t\t.luma())\n\t.layer(shape(2, .015, .1)\n\t\t.repeat(10, 10)\n\t\t.rotate(1)\n\t\t.luma())\n.modulate(osc([1,10].smooth(),.00001))\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.layer(shape(100, .25, .1)\n\t\t.blend(gradient(01)\n\t\t\t.blend(noise(10), .25))\n\t\t.scale([1, .81, 1.2].smooth()\n\t\t\t.fast(), .995)\n\t\t.rotate(1, 1)\n\t\t.scrollX(1, -.1).scrollY(1, -.1)\n\t\t.luma())\n\t.blend(noise(10000, .01), .01)\n\t.color(1, -1, -1)\n// .invert().contrast(1.025)\n\t.out(o0)\n\n// === versión 2 ===\nsolid()\n\t.layer(shape(2, .015, .1)\n\t\t.repeat(10, 10)\n\t\t.luma())\n\t.layer(shape(2, .015, .1)\n\t\t.repeat(10, 10)\n\t\t.rotate(1)\n\t\t.luma())\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.layer(shape(100, .25, .1)\n\t\t.blend(gradient(01)\n\t\t\t.blend(noise(10), .25))\n\t\t.scale([1, .81, 1.2].smooth()\n\t\t\t.fast(), .995)\n\t\t.rotate(1, 1)\n\t\t.scrollX(1, -.1).scrollY(1, -.1)\n\t\t.luma())\n\t.blend(noise(10000, .01), .01)\n\t.color(1, -1, -1).pixelate(200,200)\n.saturate(.5)\n\t.out(o0)\n"
 },
 {
  "n": "035",
  "titulo": "OTRAS GEOMETRIA",
  "archivo": "sketches/035 - OTRAS GEOMETRIA.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(1,1)\n\t\t.luma()\n\t\t.color(.1, 1, 1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(-1,-1)\n\t\t.luma()\n\t\t.color(1, -1, .1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(.1,-1)\n\t\t.luma()\n\t\t.color(.1, 1, 1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(-.1,1)\n\t\t.luma()\n\t\t.color(1, -1, .1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(-.51,1)\n\t\t.luma()\n\t\t.color(.1, 1, 1))\n\t.layer(shape(100, 1, .5)\n\t\t.scale(1, .05, .81)\n\t\t.rotate(.51,-1)\n\t\t.luma()\n\t\t.color(1, -1, .1))\n\t.layer(shape(100, .15, .25)\n\t\t.scale(1, .5).rotate(1,1)\n\t\t.luma())\n\t.repeat()\n\t.blend(noise(1000), .18)\n\t.color(1,1,1).blend(o0).rotate(1,.25)\n\t.modulate(osc(10),.15)\n\t.out(o0)\n"
 },
 {
  "n": "036",
  "titulo": "OTRA Textura quad",
  "archivo": "sketches/036 - OTRA Textura quad.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n\t.layer(osc(10))\n\t.modulate(shape(6, .1, 1), 2)\n\t.diff(osc(100, .1, 1)\n\t\t.modulate(shape(4, .5).color(1,.1,.01)\n\t\t\t.rotate(Math.PI)\n\t\t\t.scale(1.3, .5)\n\t\t\t.scrollX(1)\n\t\t\t.scrollY(-1)\n            .colorama(-.01)\n\t\t\t.diff(osc(20, .1, .1).saturate(1.5))))\n.contrast(1.25)\n.mask(shape(4,.1,.5).scale(2,5).rotate())\n\t.out(o0)\n\n\nscreencap()\n"
 },
 {
  "n": "037",
  "titulo": "INTERVECION G",
  "archivo": "sketches/037 - INTERVECION G.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n\t.layer(shape(2, .015, .1)\n\t\t.repeat(10, 10)\n\t\t.luma())\n\t.layer(shape(2, .015, .1)\n\t\t.repeat(10, 10)\n\t\t.rotate(1)\n\t\t.luma())\n.modulate(osc([1,10].smooth(),.00001))\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.layer(shape(100, .25, .1)\n\t\t.blend(gradient(01)\n\t\t\t.blend(noise(10), .25))\n\t\t.scale([1, .81, 1.2,10,0].ease()\n\t\t\t.fast(), .995)\n\t\t.rotate(1, 1)\n\t\t.luma())\n\t.blend(noise(10000, .01), .01)\n.modulateHue(o0,10).diff(osc(1,1,.1))\n\t.out(o0)\n"
 },
 {
  "n": "038",
  "titulo": "PIX",
  "archivo": "sketches/038 - PIX.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.1,.2,.3)\n.layer(osc(1,1,2).luma())\n.layer(osc(1,1,2).rotate(Math.sin(time/.2),.1).luma())\n.layer(osc(1,1,2).rotate(Math.sin(time/.5),.1).luma())\n.modulate(osc(.1,-.00001),time*.02)\n.mult(shape(10,.1,.01)\n.scale(1,.65))\n.blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,.001)\n.modulateScale(o0,1.5)\n.modulateRotate(o0,1.5)\n.shift([.002,.01].ease())\n.contrast(1.005)\n.hue(.001)\n.modulatePixelate(o0,100,10)\n.pixelate(100,100)\n.modulateScale(o0,[.01,.95,1].smooth().ease())\n  .out(o0)\n"
 },
 {
  "n": "039",
  "titulo": "VJUELES 2023",
  "archivo": "sketches/039 - VJUELES 2023.js",
  "tags": [],
  "mini": true,
  "codigo": "s0.initStream(\"vueles\");\nsrc(s0);\npb.setName(\"algorave\");\n// vueles\n//background sky\nsolid(0.11, 0.00001, 0.15, 1)\n  .layer(\n    shape(33, 0.009, 0.33)\n      .repeat(10, 10)\n      .pixelate(100, 100)\n      .scrollX(1, 0.1)\n      .luma()\n      .rotate()\n      .diff(o0)\n  )\n  // floor\n  .layer(\n    shape(1, 0.3, 0.01)\n      .scale(1, 0.5)\n      .luma()\n      .scrollY(-0.001)\n      .color(0.01, 0.01, 0.0)\n  )\n  //sun\n  .layer(\n    shape(100, 0.3, 0.01)\n      .scale(1, 0.5, 0.9)\n      .luma()\n      .scrollY(1.3)\n      .color(0.95, 0.95, 0.1)\n  )\n  //moon\n  .layer(\n    shape(100, 0.3, 0.01)\n      .scale(0.88, 0.5, 0.9)\n      .luma()\n      .invert()\n      .scrollY(1.3)\n  )\n  //pyramid\n  .layer(\n    shape(3, 0.3, 0.01)\n      .scale(1, 0.5, 0.95)\n      .luma()\n      .scrollY(1)\n      .rotate(3.13)\n      .color(1, 1, 1)\n  )\n  .layer(\n    shape(3, 0.3, 0.01)\n      .scale(0.91, 0.5, 0.95)\n      .luma()\n      .scrollY(1)\n      .rotate(3.13)\n      .color(0, 0, 0)\n  )\n  .layer(\n    shape(3, 0.3, 0.01)\n      .scale(0.81, 0.5, 0.95)\n      .luma()\n      .scrollY(1)\n      .rotate(3.13)\n      .color(1, 1, 1)\n  )\n  .layer(\n    shape(3, 0.3, 0.01)\n      .scale(0.71, 0.5, 0.95)\n      .luma()\n      .scrollY(1)\n      .rotate(3.13)\n      .color(0, 0, 0)\n  )\n  .layer(\n    shape(3, 0.3, 0.01)\n      .scale(0.61, 0.5, 0.95)\n      .luma()\n      .scrollY(1)\n      .rotate(3.13)\n      .color(1, 1, 1)\n  )\n  .layer(\n    shape(3, 0.3, 0.01)\n      .scale(0.51, 0.5, 0.95)\n      .luma()\n      .scrollY(1)\n      .rotate(3.13)\n      .color(0, 0, 0)\n  )\n  .layer(\n    shape(3, 0.3, 0.01)\n      .scale(0.41, 0.5, 0.95)\n      .luma()\n      .scrollY(1)\n      .rotate(3.13)\n      .color(1, 1, 1)\n  )\n  .layer(\n    shape(3, 0.3, 0.01)\n      .scale(0.31, 0.5, 0.95)\n      .luma()\n      .scrollY(1)\n      .rotate(3.13)\n      .color(0, 0, 0)\n  )\n  .blend(noise(1000, time * -0.005), 0.09)\n  .out(o0);\n"
 },
 {
  "n": "040",
  "titulo": "OPART pixelart",
  "archivo": "sketches/040 - OPART pixelart.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.4,0,.4)\nshape(1,.05,2).repeat(25,25).modulate(noise(.25,.1))\n.modulateRotate(osc(5,.001,.0001))\n.out(o0)\n\n// capa01\nshape(30,10,0.05)\n.add(noise(200),.001)\n.mult(shape(1,.01,.010).scale(2,1,1.75).modulate(osc(100).pixelate(50,50)).scrollY(-1))\n.diff(shape(3,.01,.010).scale(10,1,1.75).rotate(3.15))\n.colorama(.0100)\n// .diff(gradient(.1))\n// .saturate(50)\n// .modulate(osc(5,1,100).scrollX(100,.02))\n.hue(90)\n.luma(.0080)\n.color(.71,0,.71)\n.pixelate(50,50)\n.out(o1)\n\nrender(o1)\n"
 },
 {
  "n": "041",
  "titulo": "DISTORTED PAISAJE",
  "archivo": "sketches/041 - DISTORTED PAISAJE.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(10,10,10,1)\n.mult(voronoi(2000,.5,12),.15)\n.out(o0)\nshape(3,.3,0).rotate(1.045).color(1,1,2).colorama(.1)\n.diff(shape(2,.3,0).scrollY(.85).scrollX(-2,2))\n.add(shape(3,.32,0).rotate(1.045).scrollX(1.001).scale(1,1.,1))\n.scale(1,.9,1.3)\n.scrollX(1.1)\n.scrollY(.9)\n.diff(o0,1)\n.invert()\n.blend(\n  shape(100,.1,0.1)\n.rotate(1.045)\n.scrollX(.86)\n.scrollY(1.15)\n.scale(1,1.2,1.9)\n.color(10,.1,0.1)\n)\n.blend(\n  shape(2,.6,.6)\n  .color(1,1,0)\n  .scrollX(.01,8)\n  .rotate(1.57),.28)\n.out(o1)\ngradient(10,20)\n.mult(o0,1)\n.color(255,255,255)\n.diff(shape(8,.1,0).colorama(()=>Math.tanh(time*10)*2/2/.2))\n.modulate(o1,1)\n.out(o2)\nsrc(o2)\n.modulate(o2,()=>Math.cos(time*.05))\n.blend(o1,1.015)\n.diff(voronoi(2,.5,10))\n.brightness(.1)\n.modulate(o1,()=>Math.cos(time/2/2)*10/2/2)\n.blend(o1,.9)\n.contrast(1)\n.pixelate(time*time*50)\n// .scrollX(1,-.08)\n// .hue(time*2/2)\n.colorama(()=>Math.cos(time*.2)) // Estrobo de color >\n.saturate(0.1)\n.kaleid(1.1)\n.blend(o1,.5)\n.mult(shape(5,.5,.5))\n.colorama(5)\n.thresh()\n.out(o3)\nrender(o3)\n"
 },
 {
  "n": "042",
  "titulo": "DESTRUCTION",
  "archivo": "sketches/042 - DESTRUCTION.js",
  "tags": [
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\nsolid(1.5, 0.28, 0.81)\n  .layer(osc(100, 0.1, 1).luma())\n  .layer(osc(20, 0.1, 1).rotate().luma())\n  .layer(\n    osc(25, 0.06, 1).rotate(Math.PI, 0.1).luma()\n  )\n  .modulateHue(o0, 100)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .scrollX(2, 0.000001)\n  .modulateScale(o0, 0.02).contrast(1.1).invert([0,1].ease(1).fast(4*2))\n  .out(o0);\n\nrender(o0);\n\n\n//\n\n// === versión 2 ===\nsolid(1.5, 0.28, 0.81)\n  .layer(osc(100, 0.1, 1).luma())\n  .layer(osc(20, 0.1, 1).rotate().luma())\n  .layer(\n    osc(25, 0.06, 1).rotate(Math.PI, 0.1).luma()\n  )\n  .modulateHue(o0, 100)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .scrollX(2, 0.000001)\n  .modulateScale(o0, 0.02).contrast(1.1).invert([0,1].ease(1).fast(4*2))\n  .out(o0);\n\nrender(o0);\n\n// === versión 3 ===\nsolid(1.5, 0.28, 0.81)\n  .layer(osc(100, 0.1, 1).luma())\n  .layer(osc(20, 0.1, 1).rotate().luma())\n  .layer(\n    osc(25, 0.06, 1).rotate(Math.PI, 0.1).luma()\n  )\n  .modulateHue(o0, 100)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .scrollX(2, 0.000001)\n  .modulateScale(o0, 0.02)\n  .contrast(1.1)\n  .invert([0, 1].ease(1).fast(4 * 2))\n  .out(o0);\n\nrender(o0);\n"
 },
 {
  "n": "043",
  "titulo": "2020 First Patterns Pandemics",
  "archivo": "sketches/043 - 2020 First Patterns Pandemics.js",
  "tags": [],
  "mini": true,
  "codigo": "// *4l3n D3m3* 2020\n\npb.setName(\"the void\");\nsolid(0.51, 0.21, 0.25, 0.1)\n  .mult(\n    shape(3, 0.21, 0.31)\n      .scale(3, 0.92, 0.25)\n      .repeat(20, 20)\n  )\n  .rotate(0.971, 0.091)\n  .modulate(osc(5.9, 0.5))\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .modulateHue(o0, 10)\n  .colorama(0.0012)\n  .contrast(1)\n  .modulateRotate(o0, 0.051, 0.001)\n  .mult(shape(100, 0.6, 0.41).scale(1, 0.81, 1.3))\n  .modulateScale(o0, [0.51, 0.81, 1].ease(), [0.51, 0.81, 1].ease())\n  .colorama(0.015)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .modulateHue(o0, [0,5,10,20,50].ease())\n  .saturate([0.85, 1.15, 0.854, 0].ease())\n  .brightness(0.00251)\n  .out(o0);\n"
 },
 {
  "n": "044",
  "titulo": "classic kaleidoscope",
  "archivo": "sketches/044 - classic kaleidoscope.js",
  "tags": [],
  "mini": true,
  "codigo": "n = 4\na = () => shape(3,0.5,.5).repeat(n,n)\na()\n.add(a()\n.scrollX(0.05/n)\n.scrollY(0.05/n))\n.color(.95,.01,.95)\n.colorama(n/.9)\n.rotate(1.55,0.1/n)\n.rotate(.0001/n,.0025)\n.scale(1,n,n)\n.diff(osc(n,n/n*.62,n).blend(voronoi(n,.01,n).modulateHue(osc(n/n,.1,.001))))\n.kaleid(n*4)\n.scale(.1,()=>Math.cos(1/n)*1.8,()=>Math.cos(1/n)*2.8)\n.out(o0)\nsolid(.81,.1,.1)\n.diff(o0).modulateScrollX(o0,1/n,1/n)\n.rotate(1,n)\n.out(o1)\nrender(o0)\n"
 },
 {
  "n": "045",
  "titulo": "weed jajajaja",
  "archivo": "sketches/045 - weed jajajaja.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(0,1,0)\n.layer(shape(4,.2,1).thresh().scale(1,.02).luma().color(0,0,0).scrollY(-.1))\n.layer(shape(100,.2,1).thresh().scale(1,.15).luma().color(0,0,0))\n.layer(shape(100,.2,1).thresh().scale(1,.15).luma().color(0,0,0).rotate(.55).scrollX(-.1).scrollY(-.05))\n.layer(shape(100,.2,1).thresh().scale(1,.15).luma().color(0,0,0).rotate(-.55).scrollX(.1).scrollY(-.05))\n.layer(shape(100,.2,1).thresh().scale(1,.15).luma().color(0,0,0).rotate(-.85).scrollX(.17).scrollY(-.12))\n.layer(shape(100,.2,1).thresh().scale(1,.15).luma().color(0,0,0).rotate(.85).scrollX(-.17).scrollY(-.12))\n.layer(shape(100,.2,1).thresh().scale(1,.15).luma().color(0,0,0).rotate(-1).scrollX(.17).scrollY(-.25))\n.layer(shape(100,.2,1).thresh().scale(1,.15).luma().color(0,0,0).rotate(1).scrollX(-.17).scrollY(-.25))\n.out(o0)\n\nsrc(o0)\n.scale(1,.35).repeat()\n  .out(o1)\n\nrender(o1)\n"
 },
 {
  "n": "046",
  "titulo": "BASIC FEEDBACK (WINDOW)",
  "archivo": "sketches/046 - BASIC FEEDBACK (WINDOW).js",
  "tags": [
   "pantalla",
   "audio"
  ],
  "mini": false,
  "codigo": "s0.initScreen()\nsrc(s0)\n\n\t.mult(shape(100).scale(2.5,.85,1.35))\n\t\t.modulate(noise([.2,.25,0.30,.25,.2].fast(.2)),()=>Math.cos(-1)*.5)\n\t\t.diff(o0,()=>a.fft[1]*5)\n\t\t.modulateHue(o0,2)\n// .invert()\n\t.saturate(2)\n  .out()\n"
 },
 {
  "n": "047",
  "titulo": "GLITCHED HARDER FASTER",
  "archivo": "sketches/047 - GLITCHED HARDER FASTER.js",
  "tags": [],
  "mini": true,
  "codigo": "// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/\nlet glitch = \"st.x*(.0001*0.05)\";\n\npb.setName('deme')\nvoronoi(10,1/8,\"st.x*st.y\")\n.blend(gradient(\"st.x*st.x/st.x*.04\"),glitch)\n.hue(glitch)\n// .scale(\"st.x*st.y\")\n.contrast(\"st.x*1.9\")\n// .layer(noise(\"st.x*st.x/Math.E\"))\n.blend(noise(100),\"st.y*st.y*.5\")\n.modulateRotate(o0,\"st.x/st.y\",[1,10].ease().smooth().fast(.1))\n.scrollY(\"st.x*(.001/.0005)\",glitch)\n.contrast(15,.001)\n.out(o0)\n"
 },
 {
  "n": "048",
  "titulo": "WEEEDBACK",
  "archivo": "sketches/048 - WEEEDBACK.js",
  "tags": [
   "mouse",
   "pantalla"
  ],
  "mini": false,
  "codigo": "pb.setName('c y b e r s e r')\n\ns0.initScreen()\n\nsrc(s0).scale(1)\n.modulate(o0,()=>mouse.x*0.0001)\n.colorama([0,0,0,0,0,1].ease().fast())\n\n.out(o0)\n\nsetResolution(1600,900)\n\nspeed=1\n"
 },
 {
  "n": "049",
  "titulo": "Colores GLSL",
  "archivo": "sketches/049 - Colores GLSL.js",
  "tags": [
   "glsl"
  ],
  "mini": true,
  "codigo": "setFunction({\n  name: 'cosPalette',type: 'color',\n  inputs: [\n  ],\n  glsl:\n`  \tvec3 a = vec3(0.5);\n    vec3 b = vec3(0.5);\n    vec3 c = vec3(1.0,0.7,0.4);\n    vec3 d = vec3(0.0,0.15,0.20);\n    vec3 t = _c0.xyz;\n  \treturn vec4(a + b*cos( 6.28318*(c*t+d) ),1.);`\n})\n\n\n// B&W pattern\ntex1= ()=>osc(5,0.01).modulate(osc(7,0.1),0.4)\n\ntex1().out(o0)\n\n// Con color\ntex1().cosPalette().out(o1)\n\n\nrender()\n"
 },
 {
  "n": "050",
  "titulo": "MOUSE ROTATED",
  "archivo": "sketches/050 - MOUSE ROTATED.js",
  "tags": [
   "mouse"
  ],
  "mini": true,
  "codigo": "osc(\n  () => mouse.x * 0.1,\n  () => mouse.y * 0.001,\n  () => mouse.y * 0.1\n)\n  .mask(\n    shape(4, 0.91, 1).scale(\n      1,\n      () => mouse.x * 0.001,\n      () => mouse.x * 0.0005\n    )\n  )\n  // .modulate(voronoi(1,.1,1),.0001)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .blend(o0)\n  .modulateHue(o0, 100)\n  .modulateRotate(noise(1, 1), 0.1, [0,0.0001,1].smooth().fast(.01))\n  .out(o0);\n"
 },
 {
  "n": "051",
  "titulo": "DESTRUXION",
  "archivo": "sketches/051 - DESTRUXION.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n    .layer(shape(2, .051)\n        .repeat(20, 20)\n        .luma())\n    .layer(shape(2, .051)\n        .repeat(20, 20)\n        .rotate(1.57)\n        .luma())\n    .diff(shape(300, .55).color(10,.1,.1)\n        .scale(1, .6)\n        .modulate(osc(1, .1))\n        .luma())\n    .mask(osc(10, .1, 1)\n        .modulateRotate(o0, 1, 1))\n    .blend(o0)\n    .blend(o0)\n    .blend(o0)\n    .blend(o0)\n    .modulateHue(o0, .0001)\n    .hue(.001)\n    .colorama(.00001)\n    .blend(noise(1000), -.0001)\n    .modulate(voronoi(1,1,.001),[.1,.000001,0].fit().fast(1))\n.diff(o0)\n    .out()\n\nsetResolution(3000,3000)\n"
 },
 {
  "n": "052",
  "titulo": "ANOTHER ONE OF US",
  "archivo": "sketches/052 - ANOTHER ONE OF US.js",
  "tags": [
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\nosc(10, 0.1, 2)\n  .luma()\n  .scrollX(1, 0.1)\n  .colorama()\n  .modulateHue(o0, 1)\n  .scrollY(1, 0.01)\n  .rotate(0.001, 0.001)\n  .modulateRotate(o0, [5, 1, 1].smooth())\n  .diff(o0)\n  .colorama(\n    [-0.1 / 1, 0.0025, 0.0005]\n      .smooth(1 * Math.tanh)\n      .fast(Math.PI)\n  )\n  .out(o0);\n\n// === versión 2 ===\nsolid()\n  .diff(\n    shape(100, 0.5, 0.05)\n      .scale(2, [0.5, 0.85].smooth())\n      .scrollX(1, -0.5)\n      .rotate(1, -0.5)\n      .colorama(0.5)\n  )\n  .diff(\n    shape(100, 0.5, 0.05)\n      .scale(2, [0.5, 0.55].smooth())\n      .scrollX(1, 0.5)\n      .rotate(1, 0.5)\n      .colorama(0.05)\n  )\n  .diff(\n    shape(100, 0.5, 0.05)\n      .scale(2, [0.5, 0.15].smooth())\n      .scrollX(1, 0.5)\n      .rotate(1, -0.5)\n      .colorama(-0.05)\n  )\n  .diff(\n    shape(100, 0.5, 0.05)\n      .scale(2, [0.5, 0.15].smooth())\n      .scrollX(1, 0.5)\n      .rotate(1, 0.5))\n  .blend(o0).blend(o0)\n  .blend(o0).blend(o0)\n  .modulateHue(o0, 50).contrast([1.055,1.095].ease()).hue([.1,1].ease())\n  .out(o0);\n\n// === versión 3 ===\nsolid()\n  .diff(\n    shape(100, 0.5, 0.05)\n      .scale(2, [0.5, 0.85].smooth())\n      .scrollX(1, -0.5)\n      .rotate(1, -0.5)\n      .colorama(0.5)\n  )\n  .diff(\n    shape(100, 0.5, 0.05)\n      .scale(2, [0.5, 0.55].smooth())\n      .scrollX(1, 0.5)\n      .rotate(1, 0.5)\n      .colorama(0.05)\n  )\n  .diff(\n    shape(100, 0.5, 0.05)\n      .scale(2, [0.5, 0.15].smooth())\n      .scrollX(1, 0.5)\n      .rotate(1, -0.5)\n      .colorama(-0.05)\n  )\n  .diff(\n    shape(100, 0.5, 0.05)\n      .scale(2, [0.5, 0.15].smooth())\n      .scrollX(1, 0.5)\n      .rotate(1, 0.5))\n  .blend(o0).blend(o0)\n  .blend(o0).blend(o0)\n.diff(shape(100,.5,.51).scale(Math.PI*-1,[.3,.25].ease().fast(),[.5,.15].ease().fast())).modulateRepeat(osc(10,.1,1),[1,2].ease().fast(),[1,2].ease().fast())\n.luma()\n  .out(o0);\n"
 },
 {
  "n": "053",
  "titulo": "CODEX",
  "archivo": "sketches/053 - CODEX.js",
  "tags": [],
  "mini": true,
  "codigo": "pb.setName(\"arihuani\")\nsolid(.91,.001,.151)\n\t.diff(shape(30,.1,.81).scale(1.8,1.1,1.8).rotate(100,.1).colorama(10).color(.01,1,.01).repeat(1,1),1)\n\t.modulateRotate(voronoi(100,1,1).colorama(.001).scrollX(10,10))\n\t.modulateRotate(osc(()=>Math.cos(1)*50,()=>Math.cos(10)*.5,()=>Math.cos(1)*50))\n\t.colorama(.1)\n\t.saturate(.1)\n\t.contrast(100)\n\t.brightness(1)\n\t.hue(10)\n// \t.mult(shape(100,.25,.5).scale(1,1.2,[0,1.5,0].smooth()))\n\t.modulate(noise(1000,10))\n\t.pixelate([1000,500,1].smooth(),[1000,500,1].smooth())\n\t.modulateHue(o0,100)\n\t.hue()\n  .out(o0)\n"
 },
 {
  "n": "054",
  "titulo": "CIRCLES LITTLE CIRCLES",
  "archivo": "sketches/054 - CIRCLES LITTLE CIRCLES.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.1, .25, .25)\n\t.diff(shape(100, .51, .0001)\n\t\t.scale(1, .5)\n\t\t.scrollX(1, .001)\n\t\t.scrollY(1, .1)\n\t\t.luma()\n\t\t.color(1, 1, .1)\n\t\t.repeat())\n\t.diff(shape(100, .51, .0001)\n\t\t.scale(1, .5)\n\t\t.scrollX(1, .01)\n\t\t.scrollY(1, .01)\n\t\t.luma()\n\t\t.color(0.9, .25, .1)\n\t\t.repeat())\n\t.diff(shape(100, .51, .0001)\n\t\t.scale(1, .5)\n\t\t.scrollX(1, .21)\n\t\t.scrollY(1.25, .1)\n\t\t.luma()\n\t\t.color(1.25, .8, .1)\n\t\t.repeat())\n\t.diff(shape(100, .51, .0001)\n\t\t.scale(1, .5)\n\t\t.scrollX(1, .25)\n\t\t.scrollY(1.25, .01)\n\t\t.luma()\n\t\t.color(.1, .1, .1)\n\t\t.repeat())\n\t.modulate(osc(2,.8,1).luma([2,1,0].fast(.25)),1.5,.1)\n\t.out(o0)\nsolid()\n.layer(src(o0).luma())\n.layer(voronoi(100,1,10).luma())\n.blend(o0,.35).blend(o0,.45).blend(o0,.1).blend(o0,.1)\n.kaleid([1,2,3,4,5,6,7,8,9,0].fast(.001).ease(.001))\n.modulatePixelate(o0,10,[10,1].fast(.01).ease())\n.contrast(1.25)\n.out(o2)\n\nrender(o2)\n\nspeed=1.8\n\nsetResolution(1920,1080)\n\nscreencap()\n"
 },
 {
  "n": "055",
  "titulo": "INTRO",
  "archivo": "sketches/055 - INTRO.js",
  "tags": [
   "imagen",
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\ns0.initImage('https://images.pexels.com/photos/5924865/pexels-photo-5924865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')\nsrc(s0).saturate(10)\n.modulate(osc(100).modulate(o0,-.1))\n.blend(o0).blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,[50,1].smooth())\n.out(o0)\nosc(100,.1,1).modulate(osc(10)).rotate().luma()\n.diff(o0)\n.diff(o0)\n.diff(o0)\n.diff(o0)\n.modulateScale(o0,2)\n.out(o1)\n\n// === versión 2 ===\ns0.initImage('https://images.pexels.com/photos/5924865/pexels-photo-5924865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')\nsrc(s0).saturate([-1])\n.contrast().brightness(-.2).color(.9,.01,.9)\n.modulate(osc(10).modulate(o0,-.001))\n.blend(o0).blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,[5].smooth())\n.out(o0)\nosc([10,40,50,100],.1,1).modulate(osc(10)).rotate().luma()\n.diff(o0)\n//.diff(o0)\n//.diff(o0)\n//.diff(o0)\n.modulateScale(o0,()=>Math.cos(time)*.04)\n.out(o1)\n\nrender(o0)\n"
 },
 {
  "n": "056",
  "titulo": "JEEZ",
  "archivo": "sketches/056 - JEEZ.js",
  "tags": [
   "imagen",
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\n// Jesucristo Quiere Chuparme los ojos!\nvoronoi(5,.11,10)\n.modulateHue(o0,50)\n.modulateScale(o0,[1,2,3,4,10].smooth())\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.hue(.0001)\n.invert([1,0,1.1].ease())\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/6048539/pexels-photo-6048539.jpeg?cs=srgb&dl=pexels-alen-deme-6048539.jpg&fm=jpg')\nsrc(s0)\n.diff(o0)\n.modulateHue(o1,50)\n.colorama(-.0001)\n.hue([-.091,1,.001,2].ease())\n.repeat(2,2)\n.out(o1)\nrender(o1)\n\n// === versión 2 ===\n// Jesucristo Quiere Chuparme los ojos!\nvoronoi(5,.11,10)\n.modulateHue(o0,50)\n.modulateScale(o0,[1,2,3,4,10].smooth())\n.blend(o0)\n.blend(o0)\n.blend(o0)\n// .hue(.1)\n// .invert([1,0,1.1].ease())\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/5924369/pexels-photo-5924369.jpeg?cs=srgb&dl=pexels-alen-deme-5924369.jpg&fm=jpg')\nsrc(s0)\n.diff(o0)\n.hue([-.91,1,.1,2].ease())\n.modulateScale(o1,-3,1)\n.blend(o0)\n.blend(o0)\n.contrast(1.25)\n.brightness(.005)\n.out(o1)\nrender(o1)\n\n// === versión 3 ===\n// Jesucristo Quiere Chuparme los ojos!\npb.setName(\"deme\")\nvoronoi(5,.11,10)\n.modulateHue(o0,50)\n.modulateScale(o0,[1,2,3,4,10].smooth())\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.hue(.1)\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/6065430/pexels-photo-6065430.jpeg?cs=srgb&dl=pexels-alen-deme-6065430.jpg&fm=jpg')\nsrc(s0)\n.diff(o0)\n.hue([-.91,1,.1,2].ease())\n.modulateScale(o1,-3,1)\n.blend(noise(1000),.02)\n.blend(o0)\n.blend(o0)\n.modulateScale(o1,[0.5,1,2,1,2,1.5,3].smooth())\n.brightness([.08,.09,.01].smooth())\n.contrast(1.15)\n.saturate(.99)\n.scale([1,.9,2].smooth())\n.out(o1)\nrender(o1)\n\n// === versión 4 ===\n// Jesucristo Quiere Chuparme los ojos!\npb.setName(\"deme\")\nvoronoi(5,.11,10)\n.modulateHue(o0,50)\n.modulateScale(o0,[1,2,3,4,10].smooth())\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.hue(.1)\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/6065430/pexels-photo-6065430.jpeg?cs=srgb&dl=pexels-alen-deme-6065430.jpg&fm=jpg')\nsrc(s0)\n.diff(o0)\n.hue([-.91,1,.1,2].ease())\n.modulateScale(o1,-3,1)\n.blend(noise(1000,100),.02)\n.blend(o0)\n.blend(o0)\n.modulateScale(o1,[0.5,1,2,1,2,1.5,3].smooth())\n.brightness([.08,.09,.01].smooth())\n.contrast(1.15)\n.saturate(.99)\n.scale([1,.9,2].smooth())\n.colorama(.06)\n.out(o1)\nrender(o1)\n\n// === versión 5 ===\n// Jesucristo Quiere Chuparme los ojos!\npb.setName(\"deme\")\nvoronoi(5,.11,10)\n.modulateHue(o0,50)\n.modulateScale(o0,[1,2,3,4,10].smooth())\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.hue(.1)\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/6065812/pexels-photo-6065812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')\nsrc(s0)\n.out(o1)\nsolid(1,1,1)\n.diff(o0)\n.diff(o1)\n.hue([-.91,1,.1,2].ease())\n.modulateScale(o1,-3,1)\n.blend(noise(1000,100),.02)\n.blend(o0)\n.blend(o0)\n.modulateScale(o1,[0.5,1,2,1,2,1.5,3].smooth())\n.brightness([.08,.09,.01].smooth())\n.contrast(1.15)\n.saturate(.99)\n.scale([1,.9,2].smooth())\n.colorama(.96)\n.out(o2)\nrender(o2)\n\n// === versión 6 ===\n// Jesucristo Quiere Chuparme los ojos!\npb.setName(\"deme\")\nvoronoi(5,.11,10)\n.modulateHue(o0,50)\n.modulateScale(o0,[1,2,3,4,10].smooth())\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.hue(.1)\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/6065812/pexels-photo-6065812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')\nsrc(s0)\n.out(o1)\nsolid(.1,.81,.01)\n.blend(o1,.9)\n.modulateScale(o1,-3,1)\n.blend(noise(1,1),.02)\n.modulateScale(o1,[0.5,1,2,1,2,1.5,3].smooth())\n.scale([1,.9,2].smooth())\n.modulateHue(o0,50)\n.diff(o1)\n.modulateRotate(o0,10,50)\n.out(o2)\nrender(o2)\n"
 },
 {
  "n": "057",
  "titulo": "HYDRABITS",
  "archivo": "sketches/057 - HYDRABITS.js",
  "tags": [],
  "mini": true,
  "codigo": "solid()\n.layer(osc(100,-.01,2).luma().rotate())\n.layer(osc(100,-.01,2).luma().rotate(Math.PI))\n.layer(osc(150,-.025,2).luma().rotate(Math.PI))\n.layer(osc(10,-.005,2).luma().rotate())\n.blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,10)\n.colorama(.010)\n.color(1,.95,.95)\n.out(o0)\n\nsetResolution(1920,1080)\nspeed= 2\n"
 },
 {
  "n": "058",
  "titulo": "MIXIDELIA",
  "archivo": "sketches/058 - MIXIDELIA.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.51, .75, .91)\n\t.layer(osc(100, -.1)\n\t\t.thresh()\n\t\t.luma()\n\t\t.color(0, .55, .40)\n\t\t.pixelate(1000)\n\t\t.rotate(.75))\n\t.layer(osc(10, .01)\n\t\t.thresh()\n\t\t.luma()\n\t\t.color(0, .91, .91)\n\t\t.pixelate(100)\n\t\t.rotate(-.75))\n\t.layer(osc(10, -.1)\n\t\t.thresh()\n\t\t.luma()\n\t\t.color(0, .55, .40)\n\t\t.pixelate(1000)\n\t\t.rotate(.75))\n\t.hue(.5)\n\t.pixelate(100)\n\t.contrast(1.35)\n\t.pixelate(5, 100, 10)\n\t.diff(osc(100, .001, 1)\n\t\t.rotate(.1), .45)\n\t.hue(1.5)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, 5)\n\t.pixelate(1000, 10, 1)\n\t.blend(noise(100, 1), .011)\n\t.out(o0)\n\nscreencap()\n\n\nsetResolution(1600, 900)\n"
 },
 {
  "n": "059",
  "titulo": "LABORATORIO VISUAL RESULT - EL BOLSON 2023",
  "archivo": "sketches/059 - LABORATORIO VISUAL RESULT - EL BOLSON 2023.js",
  "tags": [
   "mouse",
   "audio"
  ],
  "mini": true,
  "codigo": "pb.setName('deme')\n\n\nsolid()\n\t.layer(shape(9, .005, .85)\n\t\t.scroll(() => mouse.x * -.002, () => mouse.y * -.002)\n\t\t.scale(() => mouse.x * .0005)\n\t\t.mult(gradient(5)\n\t\t\t.diff(noise(10, 1))))\n\t.diff(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, 10)\n\t.brightness(() => a.fft[1] * .05)\n\t.contrast(1.0015)\n\t.blend(noise(1000), .001)\n\t.contrast(1.025)\n\t.blend(voronoi(1,1),.001)\n\t.out(o0)\n\nscreencap()\n\nsetResolution(1600,900)\n"
 },
 {
  "n": "060",
  "titulo": "HYDRABRIL 2022 REGISTROS",
  "archivo": "sketches/060 - HYDRABRIL 2022 REGISTROS.js",
  "tags": [
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\n// 1 de hydrabril\n\nsolid(.1,.01,.1)\n.layer(noise(1).thresh().luma())\n.layer(shape(2,.0001).luma())\n.layer(shape(2,.0001).luma().rotate(1.56))\n.diff(voronoi(1).luma())\n.rotate(11)\n.out(o0)\n\n// === versión 2 ===\n// 2 de hydrabril\n\nsolid(.05, .05, .1)\n\t.layer(shape(3, .5, .01)\n\t\t.rotate(Math.PI)\n\t\t.scale(1, .6)\n\t\t.luma()\n\t\t.color(0, 1, 1))\n\t.layer(shape(3, .4, .01)\n\t\t.rotate()\n\t\t.scale(1, .6)\n\t\t.luma()\n\t\t.color(0, .5, .4))\n\t.layer(shape(3, .3, .01)\n\t\t.rotate(Math.PI)\n\t\t.scale(1, .6)\n\t\t.luma()\n\t\t.color(0, .9, .9))\n\t.layer(shape(3, .2, .01)\n\t\t.rotate()\n\t\t.scale(1, .6)\n\t\t.luma()\n\t\t.color(0, .5, .4))\n\t.scrollX(1)\n\t.scrollY(.91)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateRotate(o0, .01, [.01, 1].fit()\n\t\t.smooth()\n\t\t.fast())\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, [1, 10].ease().fast()\n\t\t.ease())\n\t.colorama(.01)\n\t.layer(shape(30, .5, .01)\n\t\t.rotate(Math.PI)\n\t\t.scale(1, .6)\n\t\t.luma()\n\t\t.color(1, 1, 1))\n\t.layer(shape(30, .4, .01)\n\t\t.rotate()\n\t\t.scale(1, .6)\n\t\t.luma()\n\t\t.color(0, 0, 0))\n\t.layer(shape(30, .3, .01)\n\t\t.rotate(Math.PI)\n\t\t.scale(1, .6)\n\t\t.luma()\n\t\t.color(1,1, 1))\n\t.layer(shape(30, .2, .01)\n\t\t.rotate()\n\t\t.scale(1, .6)\n\t\t.luma()\n\t\t.color(0,0,0))\n\t.blend(o0).blend(o0)\n\t.modulateHue(o0, [1, 10, 100].fast()\n\t\t.ease())\n.contrast(1.1)\n.modulatePixelate(osc(10),100,10)\n\t.out(o0)\n\n// === versión 3 ===\n// 3 de hydrabril\n\nsolid()\n.layer(noise(1).thresh().luma())\n.layer(shape(3,.1,.1).luma().scale(2,.6).repeat(1,1).rotate(1,1).scale(1,.1).diff(o0))\n.layer(noise(1,.15).thresh().luma().colorama(.001))\n.colorama([-.1,.1].ease().fast())\n.blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,5)\n.modulateRotate(o0,.01,.02)\n.modulate(osc(10),.01)\n.contrast(1.1)\n  .out(o0)\n\n// === versión 4 ===\n// 4 de hydrabril\n\nsolid()\n.layer(noise(1).thresh().luma())\n.layer(shape(3,.1,.1).luma().scale(2,.6).repeat(1,1).rotate(1,1).scale(1,.1).diff(o0))\n.layer(voronoi(1,.15).thresh().luma().colorama(.001))\n.colorama([-.1,.1].ease().fast())\n.blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,5)\n.modulateRotate(o0,.01,.02)\n.modulate(osc(10),.01)\n.contrast(1.1)\n  .out(o0)\n\nsolid(-.001,.001,-.01)\n.blend(o0).blend(o0).blend(o0)\n.diff(o0).diff(o0).diff(o0)\n.modulateScale(o0,10,.9)\n.modulateRotate(o0,1,100)\n.mult(shape(100,1,.1).scale(1,.55))\n.pixelate(10,10)\n.blend(o0).blend(o0)\n.colorama(1)\n.out(o1)\n\nrender(o1)\n\n// === versión 5 ===\n// 4 de #hydrabril\n\nosc([5,10,25,50,100],.0025,1)\n.luma()\n.thresh()\n.rotate()\n.pixelate(100)\n.out(o0)\n\nsrc(o0)\n.color(.0001,-.001,-1)\n.colorama(1)\n.modulate(osc(50,.1,10).posterize(10))\n.modulateRotate(o0)\n.modulateRotate(o0)\n.modulateScale(o0,.001,[.1,1,10].ease().fast(.1))\n  .out(o1)\n\nrender(o1)\n\n// === versión 6 ===\n// 5 de #hydrabril\n\nsrc(o0)\n\t.layer(osc(100, .001, 2)\n//            .thresh()\n\t\t.rotate()\n        .scrollX(1,-.1)\n\t\t.luma(0.3)\n\t\t.mask(shape(144, 0.3, 0.00001)))\n\t.rotate(() => time / 100)\n\t.scale(2,.6)\n\t.repeat(1.2, 1.1)\n.mult(voronoi(1,.01,10).diff(o0))\n.modulate(voronoi(1,.10,1).scale(1,10).rotate(()=>time/7).scale(()=>time/5).modulate(o0))\n.modulateScale(o0,.1,1)\n.modulateScrollX(o0,.001,.1)\n.invert()\n\t.out()\n\n// === versión 7 ===\n// 6 de #hydrabril\n\nsolid(1,.1,.001)\n.layer(osc(5).luma())\n.layer(osc(7,.1,2).luma().rotate(Math.PI))\n.layer(osc(10,.1,2).luma())\n.layer(osc(15,.1,-1).luma().rotate(Math.PI))\n.layer(osc(25,.01,1).luma())\n.layer(osc(5,.01,1.5).luma().rotate(Math.PI))\n.diff(noise(1)).diff(voronoi(1))\n.modulateRotate(o0)\n.modulateRotate(o0)\n.modulateScale(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.brightness(-.0005)\n.contrast(1.025)\n.saturate(1.015)\n.add(noise(1000,10),.01)\n.out(o0)\n\n// === versión 8 ===\n// 7 de #hydrabril\nsolid(.91,.21,.35)\n.layer(\nosc(10)\n.luma()\n.rotate(()=>time/7)\n)\n.scale(1,1.95)\n.colorama(-5)\n.mult(osc(10).colorama(10).color(-1,1,-1))\n.diff(o0).diff(o0).diff(o0).diff(o0).diff(o0)\n.saturate(0.5)\n.contrast(1.95)\n  .out(o0)\n\n// === versión 9 ===\n// 8  de #hydrabril\n\nsolid(.91,.21,.35)\n.layer(\nosc(10)\n.luma()\n.rotate(()=>time/7)\n)\n.scale(1,1.95)\n.colorama(-5)\n.mult(osc(10).colorama(10).color(-1,1,-1))\n.diff(o0).diff(o0).diff(o0).diff(o0).diff(o0)\n.saturate([0.5,0.8].fit().ease())\n.contrast(1.5)\n.modulate(voronoi(10).blend(noise(1000,1),.1))\n.modulateScale(o0)\n.modulateScale(o0)\n.modulateScale(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.scale(1.025)\n  .out(o0)\n\n// === versión 10 ===\n// 9 de hydda\n\nnoise(1)\n.shift(.21,.81,.81)\n.diff(noise(1,.5).luma().kaleid(5).blend(o0))\n.hue(-.1)\n.contrast(1.11)\n.saturate(1.5)\n.modulateRotate(o0,1)\n.modulateRotate(o0,.001,.10)\n.out()\n"
 },
 {
  "n": "061",
  "titulo": "MUTANTEXTURAS",
  "archivo": "sketches/061 - MUTANTEXTURAS.js",
  "tags": [],
  "mini": true,
  "codigo": "pb.setName('deme')\n\nsolid(1, .45, .5)\n\t.layer(osc(\"st.x*.09/st.y*5.5\", .01, .2)\n\t\t.luma()\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.modulateHue(o0, 20))\n\t.contrast(1.05)\n\t.brightness(.001)\n\t.color(0, .99, .099)\n\t.blend(noise(1000), .019)\n\t.modulateRotate(o0, 1, .01)\n\t.scrollY(-.1,-.1)\n\t.blend(o0).blend(o0).blend(o0).blend(o0).blend(o0)\n\t.modulateHue(o0,1).colorama(.0055)\n\t.out(o0)\n\nsetResolution(1600,900)\n\n// screencap()\n"
 },
 {
  "n": "062",
  "titulo": "CELULA MOUSE DISTORT SEA",
  "archivo": "sketches/062 - CELULA MOUSE DISTORT SEA.js",
  "tags": [
   "mouse"
  ],
  "mini": true,
  "codigo": "osc(5, .15, 1)\n\t.blend(osc(5, .015, .001), .135)\n\t.layer(osc(10, .05, 1)\n\t\t.luma()\n\t\t.modulate(o0, .1))\n\t.modulatePixelate(o0, 10, 1)\n\t.rotate()\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.blend(o0)\n\t.modulateHue(o0, 2.5)\n\t.colorama(-.005)\n\t.blend(noise(10000, 1), .01)\n\t.add(shape(100, .25, .5)\n\t\t.scale(1, .5)\n\t\t.scrollX(() => mouse.x * -.00095)\n\t\t.scrollY(() => mouse.y * -.00095)\n\t\t.colorama(-1)\n\t\t.modulate(osc(10, 1, 1)), .035)\n\t.out(o0)\n\n\nsetResolution(1920, 1080)\n\nspeed = .2\n"
 },
 {
  "n": "063",
  "titulo": "MUTANTEXTURAS II",
  "archivo": "sketches/063 - MUTANTEXTURAS II.js",
  "tags": [
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\nsolid(0, 0, .15)\n\t.layer(shape(2, .5)\n\t\t.color(0, .75, 1)\n\t\t.scrollY(-.24)\n\t\t.luma())\n\t.layer(shape(100, .75)\n\t\t.scale(1, .56)\n\t\t.color(1.2, .75, 0)\n\t\t.scrollY(-.97)\n\t\t.luma())\n\t.blend(shape(2)\n\t\t.scrollY(1)\n\t\t.luma(), .20)\n\t.blend(shape(100, .75)\n\t\t.scale(1, .56)\n\t\t.color(1, .75, 0)\n\t\t.scrollY(-.97)\n\t\t.luma()\n\t\t.mask(shape(2, .51)\n\t\t\t.scrollY(1.756)\n\t\t\t.luma()))\n\t.saturate(3.0)\n\t.contrast(1.1)\n\t.brightness(.001)\n\t.add(noise(2.5), .1)\n\t.out(o0)\n\nsrc(o0)\n\t.blend(osc(50, .001, .1)\n\t\t.rotate(1, .01)\n\t\t.blend(o1)\n\t\t.blend(o1)\n\t\t.modulateHue(o1, 100), -.95)\n\t.blend(o0, .01)\n\t.mult(shape(4, .5, 0)\n\t\t.scale(2.5, .5).luma())\n\t.out(o1)\n\nrender(o1)\n\n\nscreencap()\n\n// === versión 2 ===\nsolid(0, 0, .15)\n\t.layer(shape(2, .5)\n\t\t.color(0, .75, 1)\n\t\t.scrollY(-.24)\n\t\t.luma())\n\t.layer(shape(100, .75)\n\t\t.scale(1, .56)\n\t\t.color(1.2, .75, 0)\n\t\t.scrollY(-.97)\n\t\t.luma())\n\t.blend(shape(2)\n\t\t.scrollY(1)\n\t\t.luma(), .20)\n\t.blend(shape(100, .75)\n\t\t.scale(1, .56)\n\t\t.color(1, .75, 0)\n\t\t.scrollY(-.97)\n\t\t.luma()\n\t\t.mask(shape(2, .51)\n\t\t\t.scrollY(1.756)\n\t\t\t.luma()))\n\t.saturate(3.0)\n\t.contrast(1.1)\n\t.brightness(.001)\n\t.add(noise(2.5), .1)\n\t.out(o0)\n\nsrc(o0)\n// \t.blend(osc(50, .001, .1)\n// \t\t.rotate(1, .01)\n// \t\t.blend(o1)\n// \t\t.blend(o1)\n// \t\t.modulateHue(o1, 100), -.95)\n// \t.blend(o0, .01)\n\t.mult(shape(4, .5, 0)\n\t\t.scale(2.5, .4).luma())\n\t.out(o1)\n\nrender(o1)\n\n\nscreencap()\n"
 },
 {
  "n": "064",
  "titulo": "METEORAS",
  "archivo": "sketches/064 - METEORAS.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.02,.09,.8)\n.layer(shape(100).luma().scale(1,.55).scrollX(1,.1).scrollY(1,1).color(1,.1,0))\n.layer(shape(2,.01).luma().scale(.8,.55).scrollX(-1,11).scrollY(1,1).color(-1,0,1))\n.layer(shape(100).luma().scale(1,.55).scrollX(1,.51).scrollY(1,-.5).color(.1,1,0))\n.layer(shape(100).luma().scale(1,.55).scrollX(1,-.1).scrollY(1,1).color(0,.1,1))\n.layer(shape(100).luma().scale(.5,.55).scrollX(1,-.1).scrollY(1,1).color(0,0,0))\n.layer(shape(2,.01).luma().scale(.8,.55).scrollX(-1,-1).scrollY(1,-1).color(-1,0,1))\n.layer(shape(100).luma().scale(.8,.55).scrollX(1,-.1).scrollY(1,1).color(0,0,0))\n.layer(shape(100).luma().scale(1,.55).scrollX(1,-.1).scrollY(1,-1).color(1,1,0))\n.layer(shape(100).luma().scale(.51,.55).scrollX(1,-.1).scrollY(1,-1).color(0,0,0))\n.layer(shape(2,.01).luma().scale(.8,.55).scrollX(1,.11).scrollY(-1,.1).color(0,0,0))\n.blend(o0).blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,-25)\n.modulateRotate(o0,.01)\n.modulateRotate(o0,.01)\n.hue(.95).saturate(1.005)\n.blend(noise(1000),.025)\n.modulateRotate(o0,.25)\n.contrast(1.001)\n.out(o0)\n\n\nspeed=.1\n"
 },
 {
  "n": "065",
  "titulo": "Pintura",
  "archivo": "sketches/065 - Pintura.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(0, 0, 0)\n\t.layer(osc(3.5, .1, 1)\n\t\t.rotate(1.55)\n\t\t.luma()\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.modulateHue(o0, 50)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t)\n\t.blend(noise(10000, 5), .0015)\n\t.sub(noise(1000, 1), .0015)\n\t.blend(voronoi(1000, 1, 1), [.015, .0015].smooth()\n\t\t.fast())\n\t.modulate(noise(2.5, .05))\n\t.contrast([1.005,1.00005,1.00055].ease().fast(3))\n\t.out(o0)\n\nsetResolution(1920,1080)\n"
 },
 {
  "n": "066",
  "titulo": "Pinturas Reprise",
  "archivo": "sketches/066 - Pinturas Reprise.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(0, 0, 0)\n\t.layer(osc(3.5, .1, 1)\n\t\t.rotate(1.55)\n\t\t.luma()\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.modulateHue(o0, 50)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t)\n\t.blend(noise(10000, 5), .0015)\n\t.sub(noise(1000, 5), .0015)\n\t.blend(voronoi(100, 2, 1), [.0025, .0015].smooth()\n\t\t.fast())\n\t.modulate(noise(2.5, .15))\n\t.contrast(1.0005)\n\t.brightness(.00005)\n\t.saturate(1.00015)\n\t.out(o0)\n"
 },
 {
  "n": "067",
  "titulo": "bit",
  "archivo": "sketches/067 - bit.js",
  "tags": [],
  "mini": true,
  "codigo": "solid(.1, .2, .3)\n\t.layer(osc(100, .1, 1)\n\t\t.luma()\n\t\t.scale(1.75, .55)\n\t\t.rotate(1)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.blend(o0)\n\t\t.modulateHue(o0, 25)\n\t\t.colorama(.01)\n\t\t.contrast(1.020))\n\t.layer(shape(100)\n\t\t.luma()\n\t\t.scale(1.55, .55)\n\t\t.color(0, 0, 0))\n\t.mult(shape(100)\n\t\t.luma()\n\t\t.scale(1.95, .55))\n.modulatePixelate(osc(1),100,100)\n\t.out(o0)\n"
 },
 {
  "n": "068",
  "titulo": "HALO",
  "archivo": "sketches/068 - HALO.js",
  "tags": [
   "imagen",
   "versiones"
  ],
  "mini": true,
  "codigo": "// === versión 1 ===\n// Alén\npb.setName(\"alen deme\")\nosc(5,.1,.1)\n.rotate(.5,.01)\n// .kaleid([-.4,-.2,-.1,-.8,-.1].smooth())\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.modulateHue(o0,50)\n.modulateScale(o0,.0011)\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/6039622/pexels-photo-6039622.jpeg?cs=srgb&dl=pexels-alen-deme-6039622.jpg&fm=jpg')\nsrc(s0)\n.saturate(.05)\n.blend(o0,.50)\n.contrast(2.5)\n.out(o1)\nrender(o1)\n\n// === versión 2 ===\n// Alén\npb.setName(\"alen deme\")\nosc(5,.1,1)\n.rotate(.5,.01)\n.kaleid([-.4,-.2,-.1,-.8,-.1].smooth())\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.blend(o0)\n.modulateHue(o0,50)\n.modulateScale(o0,1)\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/6039769/pexels-photo-6039769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')\nsrc(s0)\n.scale(1,.451,.491)\n.brightness(.25)\n.color(1,1,1)\n.contrast(1.25)\n.out(o1)\nsolid(.1,.1,.1,1)\n.blend(o1,1)\n.mult(o0,.21)\n.mult(o0,.91)\n.contrast(1.50)\n.out(o2)\nrender(o2)\n\n// === versión 3 ===\n// Los Ojos hell\npb.setName(\"Los Ojos\")\nosc(200,.01,.001)\n.blend(o0).blend(o0).blend(o0)\n.modulateHue(o0,50)\n.modulateScale(o0,1)\n.blend(noise(1000,.1),.02)\n.out(o0)\ns0.initImage('https://images.pexels.com/photos/6040216/pexels-photo-6040216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')\nsrc(s0)\n.scale(1,.351,.591)\n// .brightness(.855)\n.color(10,1,1)\n.contrast(1.25)\n.modulateScale(o0,1)\n.out(o1)\nsolid(.1,.1,.1,1)\n.blend(o0,1)\n.mult(o1,1)\n.mult(o0,.1)\n.contrast(1.10)\n.out(o2)\nrender(o2)\n"
 },
 {
  "n": "069",
  "titulo": "Scala 00",
  "archivo": "sketches/069 - Scala 00.js",
  "tags": [
   "audio",
   "midi"
  ],
  "mini": true,
  "codigo": "a.show()\na.smooth()\n\nosc(100,.1,1)\n.color(()=>cc[24],()=>cc[25],()=>cc[26])\n.contrast(()=>cc[27])\n.brightness(()=>cc[28])\n.saturate(()=>cc[29])\n.out(o0)\n\nsrc(o0)\n.mult(noise(()=>cc[31]*1,1),()=>cc[32])\n.kaleid(()=>cc[32].smooth())\n.out(o1)\n\nsrc(o1)\n.modulateKaleid(o0,()=>cc[33].smooth())\n.colorama(()=>cc[34])\n.blend(o1).blend(o1).blend(o1).blend(o1)\n.modulateHue(o0,()=>a.fft[1].smooth())\n  .out(o2)\n\nsrc(o2)\n.blend(o0,()=>cc[12])\n.blend(o1,()=>cc[11])\n.blend(o2,()=>cc[11])\n.modulateScale(o0,()=>a.fft[1]*2)\n.layer(shape(()=>cc[14],.1,.1).scale(()=>a.fft[0]*5,.6).rotate(1,1).luma().colorama(.0001))\n.modulateScrollX(o0,.1,01)\n// .pixelate([1,2,2,.4].smooth(),[10,2,2,40].smooth())\n// .blend(o3).blend(o3).blend(o3)\n.modulateHue(o0,100)\n.modulate(o3,[10,50,100].smooth())\n  .out(o3)\nrender(o3)\nspeed=.01\n"
 }
];
