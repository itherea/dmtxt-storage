s0.initStream("vueles");
src(s0);
pb.setName("algorave");
// vueles
//background sky
solid(0.11, 0.00001, 0.15, 1)
  .layer(
    shape(33, 0.009, 0.33)
      .repeat(10, 10)
      .pixelate(100, 100)
      .scrollX(1, 0.1)
      .luma()
      .rotate()
      .diff(o0)
  )
  // floor
  .layer(
    shape(1, 0.3, 0.01)
      .scale(1, 0.5)
      .luma()
      .scrollY(-0.001)
      .color(0.01, 0.01, 0.0)
  )
  //sun
  .layer(
    shape(100, 0.3, 0.01)
      .scale(1, 0.5, 0.9)
      .luma()
      .scrollY(1.3)
      .color(0.95, 0.95, 0.1)
  )
  //moon
  .layer(
    shape(100, 0.3, 0.01)
      .scale(0.88, 0.5, 0.9)
      .luma()
      .invert()
      .scrollY(1.3)
  )
  //pyramid
  .layer(
    shape(3, 0.3, 0.01)
      .scale(1, 0.5, 0.95)
      .luma()
      .scrollY(1)
      .rotate(3.13)
      .color(1, 1, 1)
  )
  .layer(
    shape(3, 0.3, 0.01)
      .scale(0.91, 0.5, 0.95)
      .luma()
      .scrollY(1)
      .rotate(3.13)
      .color(0, 0, 0)
  )
  .layer(
    shape(3, 0.3, 0.01)
      .scale(0.81, 0.5, 0.95)
      .luma()
      .scrollY(1)
      .rotate(3.13)
      .color(1, 1, 1)
  )
  .layer(
    shape(3, 0.3, 0.01)
      .scale(0.71, 0.5, 0.95)
      .luma()
      .scrollY(1)
      .rotate(3.13)
      .color(0, 0, 0)
  )
  .layer(
    shape(3, 0.3, 0.01)
      .scale(0.61, 0.5, 0.95)
      .luma()
      .scrollY(1)
      .rotate(3.13)
      .color(1, 1, 1)
  )
  .layer(
    shape(3, 0.3, 0.01)
      .scale(0.51, 0.5, 0.95)
      .luma()
      .scrollY(1)
      .rotate(3.13)
      .color(0, 0, 0)
  )
  .layer(
    shape(3, 0.3, 0.01)
      .scale(0.41, 0.5, 0.95)
      .luma()
      .scrollY(1)
      .rotate(3.13)
      .color(1, 1, 1)
  )
  .layer(
    shape(3, 0.3, 0.01)
      .scale(0.31, 0.5, 0.95)
      .luma()
      .scrollY(1)
      .rotate(3.13)
      .color(0, 0, 0)
  )
  .blend(noise(1000, time * -0.005), 0.09)
  .out(o0);
