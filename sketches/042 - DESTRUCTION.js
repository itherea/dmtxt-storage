// === versión 1 ===
solid(1.5, 0.28, 0.81)
  .layer(osc(100, 0.1, 1).luma())
  .layer(osc(20, 0.1, 1).rotate().luma())
  .layer(
    osc(25, 0.06, 1).rotate(Math.PI, 0.1).luma()
  )
  .modulateHue(o0, 100)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .scrollX(2, 0.000001)
  .modulateScale(o0, 0.02).contrast(1.1).invert([0,1].ease(1).fast(4*2))
  .out(o0);

render(o0);


//

// === versión 2 ===
solid(1.5, 0.28, 0.81)
  .layer(osc(100, 0.1, 1).luma())
  .layer(osc(20, 0.1, 1).rotate().luma())
  .layer(
    osc(25, 0.06, 1).rotate(Math.PI, 0.1).luma()
  )
  .modulateHue(o0, 100)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .scrollX(2, 0.000001)
  .modulateScale(o0, 0.02).contrast(1.1).invert([0,1].ease(1).fast(4*2))
  .out(o0);

render(o0);

// === versión 3 ===
solid(1.5, 0.28, 0.81)
  .layer(osc(100, 0.1, 1).luma())
  .layer(osc(20, 0.1, 1).rotate().luma())
  .layer(
    osc(25, 0.06, 1).rotate(Math.PI, 0.1).luma()
  )
  .modulateHue(o0, 100)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .scrollX(2, 0.000001)
  .modulateScale(o0, 0.02)
  .contrast(1.1)
  .invert([0, 1].ease(1).fast(4 * 2))
  .out(o0);

render(o0);
