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

float stripes(vec2 st) {
    return step(st.y,st.x);
}
 

vec2 tile(vec2 st) {
    return floor(st);
}
vec2 brick(vec2 st){
    vec2 st_i = floor(st);
    if (mod(st_i.y,2.) == 1.) {
        st.x += .5;
    }
    return st;
}

vec2 truchet(vec2 st){
    vec2 st_i = floor(st);
    if (mod(st_i.y,2.) == 1.) {
        st.x = 1.-st.x;
    }
    if (mod(st_i.x,2.) == 1.) {
        st.y = 1.-st.y;
    }
    return st;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.);
    
//     st *= 10.;
    
//     st = truchet(st*6.);
//     st = truchet(st*3.);
    st = truchet(st*3.);
    st = brick(st);
    st = truchet(st*1.);
    st = truchet(st*2.);
    
    vec2 st_f = fract(st);
    
    float pct = stripes(st_f);
    color += pct;
    
    
    gl_FragColor = vec4(color,1.0);
}
