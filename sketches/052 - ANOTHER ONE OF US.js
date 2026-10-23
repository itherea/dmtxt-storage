// === versión 1 ===
osc(10, 0.1, 2)
  .luma()
  .scrollX(1, 0.1)
  .colorama()
  .modulateHue(o0, 1)
  .scrollY(1, 0.01)
  .rotate(0.001, 0.001)
  .modulateRotate(o0, [5, 1, 1].smooth())
  .diff(o0)
  .colorama(
    [-0.1 / 1, 0.0025, 0.0005]
      .smooth(1 * Math.tanh)
      .fast(Math.PI)
  )
  .out(o0);

// === versión 2 ===
solid()
  .diff(
    shape(100, 0.5, 0.05)
      .scale(2, [0.5, 0.85].smooth())
      .scrollX(1, -0.5)
      .rotate(1, -0.5)
      .colorama(0.5)
  )
  .diff(
    shape(100, 0.5, 0.05)
      .scale(2, [0.5, 0.55].smooth())
      .scrollX(1, 0.5)
      .rotate(1, 0.5)
      .colorama(0.05)
  )
  .diff(
    shape(100, 0.5, 0.05)
      .scale(2, [0.5, 0.15].smooth())
      .scrollX(1, 0.5)
      .rotate(1, -0.5)
      .colorama(-0.05)
  )
  .diff(
    shape(100, 0.5, 0.05)
      .scale(2, [0.5, 0.15].smooth())
      .scrollX(1, 0.5)
      .rotate(1, 0.5))
  .blend(o0).blend(o0)
  .blend(o0).blend(o0)
  .modulateHue(o0, 50).contrast([1.055,1.095].ease()).hue([.1,1].ease())
  .out(o0);

// === versión 3 ===
solid()
  .diff(
    shape(100, 0.5, 0.05)
      .scale(2, [0.5, 0.85].smooth())
      .scrollX(1, -0.5)
      .rotate(1, -0.5)
      .colorama(0.5)
  )
  .diff(
    shape(100, 0.5, 0.05)
      .scale(2, [0.5, 0.55].smooth())
      .scrollX(1, 0.5)
      .rotate(1, 0.5)
      .colorama(0.05)
  )
  .diff(
    shape(100, 0.5, 0.05)
      .scale(2, [0.5, 0.15].smooth())
      .scrollX(1, 0.5)
      .rotate(1, -0.5)
      .colorama(-0.05)
  )
  .diff(
    shape(100, 0.5, 0.05)
      .scale(2, [0.5, 0.15].smooth())
      .scrollX(1, 0.5)
      .rotate(1, 0.5))
  .blend(o0).blend(o0)
  .blend(o0).blend(o0)
.diff(shape(100,.5,.51).scale(Math.PI*-1,[.3,.25].ease().fast(),[.5,.15].ease().fast())).modulateRepeat(osc(10,.1,1),[1,2].ease().fast(),[1,2].ease().fast())
.luma()
  .out(o0);
