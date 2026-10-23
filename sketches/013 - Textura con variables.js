let dmtxt = "st.y/.1/st.x*.1"

solid(-1, .95, .1)
	.layer(shape(9, .25, 1)
		.luma()
		.rotate(dmtxt, dmtxt)
		.modulate(osc(dmtxt, 1)))
	.colorama(dmtxt)
	.diff(osc(10, .25, 10)
		.modulateHue(o0, dmtxt))
	.contrast(1.75)
	.modulateRotate(o0,dmtxt,dmtxt,dmtxt)
	.out(o0)

setResolution(1600,900)

// screencap()
