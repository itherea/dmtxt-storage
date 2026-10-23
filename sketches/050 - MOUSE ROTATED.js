osc(
  () => mouse.x * 0.1,
  () => mouse.y * 0.001,
  () => mouse.y * 0.1
)
  .mask(
    shape(4, 0.91, 1).scale(
      1,
      () => mouse.x * 0.001,
      () => mouse.x * 0.0005
    )
  )
  // .modulate(voronoi(1,.1,1),.0001)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .modulateHue(o0, 100)
  .modulateRotate(noise(1, 1), 0.1, [0,0.0001,1].smooth().fast(.01))
  .out(o0);
