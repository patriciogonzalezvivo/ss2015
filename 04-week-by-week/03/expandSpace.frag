#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
	//for each position along x-axis, a bump is created at each particular value of y
  return  smoothstep( pct-0.02, pct, st.y) - smoothstep( pct, pct+0.02, st.y);
}

void main() {
	//normalize gradient
	vec2 st = gl_FragCoord.xy/u_resolution;

    st *= 3.1415*2.;
    st -= 3.1415;
    st.x -= u_time;

    float y = st.x;

    y = sin(y);
    //understands to we want to assign the three color channels with the same value 
    vec3 color = vec3(y);
    
    // Plot a line
    float pct = plot(st,y*.5);
    color = (1.0-pct)*color+pct*vec3(0.0,3.1415,0.0);
    
    //vec4 -->  construct a four dimensional vector with a three dimensional one plus a fourth value (opactiy)
	gl_FragColor = vec4(color/(3.1415*2.),1.0);
}