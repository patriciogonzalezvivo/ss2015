#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(vec2 st, float radius) {
    st -= .5;
    return 1.0-step(radius*.5,dot(st,st)*2.);
}
    
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.);
    
    st *= 10.;
    
    vec2 st_i = floor(st);

    if (st_i.y == 1.) {
        st.x -= .5;
    }
    
    vec2 st_f = fract(st);
    color.rg = st_f;
    
    float pct = circle(st_f,.5);
    color += pct;
    
    gl_FragColor = vec4(color,1.0);
}

