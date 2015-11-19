#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (float x) {
    return fract(sin(x)*10e5);
}

float random (vec2 xy) {
    return fract(sin(dot(xy,vec2(12.9898,78.233)))*43758.5453123);
}

float noise (vec2 st) {
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);
    
    float A = random(i_st);
    float B = random(i_st+vec2(1.,0.));
    float C = random(i_st+vec2(0.,1.));
    float D = random(i_st+vec2(1.,1.));

    f_st = smoothstep(vec2(0.),vec2(1.),f_st);
    return mix(A,B,f_st.x)+
            (C-A)*f_st.y*(1.-f_st.x)+
            (D-B)*f_st.x*f_st.y;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    st *= vec2(10.);
    float pct = noise(st);
    vec3 color = vec3(pct); 
   
    gl_FragColor = vec4(color,1.0); 
}