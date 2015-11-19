#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

float noise (vec2 st) {
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    vec2 u = smoothstep(vec2(0.),vec2(1.),f_st);
    
    return mix( mix( dot( random2(i_st + vec2(0.0,0.0) ), f_st - vec2(0.0,0.0) ), 
                    dot( random2(i_st + vec2(1.0,0.0) ), f_st - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i_st + vec2(0.0,1.0) ), f_st - vec2(0.0,1.0) ), 
                dot( random2(i_st + vec2(1.0,1.0) ), f_st - vec2(1.0,1.0) ), u.x), u.y);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    st *= vec2(10.);
    float pct = (1.0+noise(st))*.5;
    vec3 color = vec3(pct); 
   
    gl_FragColor = vec4(color,1.0); 
}