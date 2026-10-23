pb.setName('deme')


solid()
	.layer(shape(9, .005, .85)
		.scroll(() => mouse.x * -.002, () => mouse.y * -.002)
		.scale(() => mouse.x * .0005)
		.mult(gradient(5)
			.diff(noise(10, 1))))
	.diff(o0)
	.blend(o0)
	.blend(o0)
	.modulateHue(o0, 10)
	.brightness(() => a.fft[1] * .05)
	.contrast(1.0015)
	.blend(noise(1000), .001)
	.contrast(1.025)
	.blend(voronoi(1,1),.001)
	.out(o0)

screencap()

setResolution(1600,900)
