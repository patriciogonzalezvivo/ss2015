#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) - 
          smoothstep( pct, pct+0.02, st.y);
}


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.);

    // float r = length (st);      // Radius 
    // float a = atan(st.y,st.x);  // Angle

    // st -= 0.5;
    // float r = length (st);      // Radius 
    // float a = atan(st.y,st.x)/3.1415;  // Angle

    st -= 0.5;
    float r = length (st);      // Radius 
    float a = atan(st.y,st.x)/3.1415;  // Angle

    // a = a*.5+.5;
    
    st = vec2(a,r);
    vec3 A = vec3(0.7,0.1,0.2); // red
    vec3 B = vec3(0.07,0.3,0.6);  //blue
    
    
    vec3 pct = vec3(st.x);

    pct.r = pow(pct.r,0.2);
    pct.g = sin(pct.g*3.1415);
    pct.b = pow(pct.b,2.);

    color = mix (A,B,pct);
    

    color.r += plot (st,pct.r);
    color.g += plot (st,pct.g);
    color.b += plot (st,pct.b);
//-------
      
    gl_FragColor = vec4(color,1.);
}