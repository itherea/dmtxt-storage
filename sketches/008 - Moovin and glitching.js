solid(1, 0.51, 0.1)
  .layer(osc(50, 0.91, 10).luma())
  .layer(osc(10, 0.89, 10).luma().rotate())
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .modulateHue(o0, 100)
  .diff(
    voronoi(1, 0.1, 10).modulate(osc(1, 0.1, 10))
  )
  .add(
    shape(
      [100, 3, 0.1].fit().fast(10),
      -0.015,
      0.91
    ).color(
      [1, 0.21].fit().fast(0.1),
      [0.1, 3.1].fit().fast(.1),
      [0.01, 5.1].fit().fast(.5)
    )
  )
  .layer(
    osc([40, 90, 10], 0.1, 0.91)
      .luma()
      .rotate(() => Math.sin(3.14) * 30)
      .rotate(1, .75)
  )
  .mask(
    shape(100).scale(
      1,
      [0.66, 0.51].smooth().fast(10),
      [0.96, 0.81].smooth().fast(10)
    )
  .modulate(osc(10,1))
  )
  .scale([1, 2].fast().smooth())
  .diff(o0)
  .color(0.51, 1, 0.51)
  .diff(noise([1,10,50].ease().fit(1)).luma())
  .diff(o0)
  .scrollX(1, -0.1)
.blend(o0).blend(o0).blend(o0).blend(o0)
.modulateHue(o0,200)
  .out(o0);
