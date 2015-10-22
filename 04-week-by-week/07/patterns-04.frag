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

mat2 rotationMatrix(float a) {
    return mat2(vec2(cos(a),-sin(a)),
                vec2(sin(a),cos(a)));
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.);
    
    float d = distance(st,vec2(.5));
    d = sin(d*3.14*5.-u_time*3.);
//     color += d;
    
    st *= 30.;
    vec2 st_i = floor(st);
    if (mod(st_i.y,2.) == 1.) {
        st.x += .5;
    }
    vec2 st_f = fract(st);
    st_f -= .5;
    st_f = rotationMatrix(d*3.14)*st_f;
    st_f += .5;
    float pct = stripes(st_f);
    color += pct;
    
    
    gl_FragColor = vec4(color,1.0);
}
