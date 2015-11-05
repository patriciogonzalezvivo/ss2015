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

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    st *= vec2(10.);
    
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);
    
    float time = floor(u_time*10.);
    float pct = random(i_st+vec2(0.,time));
    
    vec3 color = vec3(pct); 
   
    gl_FragColor = vec4(color,1.0); 
}