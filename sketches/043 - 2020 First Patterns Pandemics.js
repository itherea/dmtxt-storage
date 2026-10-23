// *4l3n D3m3* 2020

pb.setName("the void");
solid(0.51, 0.21, 0.25, 0.1)
  .mult(
    shape(3, 0.21, 0.31)
      .scale(3, 0.92, 0.25)
      .repeat(20, 20)
  )
  .rotate(0.971, 0.091)
  .modulate(osc(5.9, 0.5))
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .modulateHue(o0, 10)
  .colorama(0.0012)
  .contrast(1)
  .modulateRotate(o0, 0.051, 0.001)
  .mult(shape(100, 0.6, 0.41).scale(1, 0.81, 1.3))
  .modulateScale(o0, [0.51, 0.81, 1].ease(), [0.51, 0.81, 1].ease())
  .colorama(0.015)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .modulateHue(o0, [0,5,10,20,50].ease())
  .saturate([0.85, 1.15, 0.854, 0].ease())
  .brightness(0.00251)
  .out(o0);
