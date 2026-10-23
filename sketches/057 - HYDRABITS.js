solid()
.layer(osc(100,-.01,2).luma().rotate())
.layer(osc(100,-.01,2).luma().rotate(Math.PI))
.layer(osc(150,-.025,2).luma().rotate(Math.PI))
.layer(osc(10,-.005,2).luma().rotate())
.blend(o0).blend(o0).blend(o0)
.modulateHue(o0,10)
.colorama(.010)
.color(1,.95,.95)
.out(o0)

setResolution(1920,1080)
speed= 2
