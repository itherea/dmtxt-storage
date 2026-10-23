setFunction({
  name: 'cosPalette',type: 'color',
  inputs: [
  ],
  glsl:
`  	vec3 a = vec3(0.5);
    vec3 b = vec3(0.5);
    vec3 c = vec3(1.0,0.7,0.4);
    vec3 d = vec3(0.0,0.15,0.20);
    vec3 t = _c0.xyz;
  	return vec4(a + b*cos( 6.28318*(c*t+d) ),1.);`
})


// B&W pattern
tex1= ()=>osc(5,0.01).modulate(osc(7,0.1),0.4)

tex1().out(o0)

// Con color
tex1().cosPalette().out(o1)


render()
