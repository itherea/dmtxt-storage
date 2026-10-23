// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
let glitch = "st.x*(.0001*0.05)";

pb.setName('deme')
voronoi(10,1/8,"st.x*st.y")
.blend(gradient("st.x*st.x/st.x*.04"),glitch)
.hue(glitch)
// .scale("st.x*st.y")
.contrast("st.x*1.9")
// .layer(noise("st.x*st.x/Math.E"))
.blend(noise(100),"st.y*st.y*.5")
.modulateRotate(o0,"st.x/st.y",[1,10].ease().smooth().fast(.1))
.scrollY("st.x*(.001/.0005)",glitch)
.contrast(15,.001)
.out(o0)
