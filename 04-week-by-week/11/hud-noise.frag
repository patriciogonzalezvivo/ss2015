// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_tex0;
uniform vec2 u_tex0Resolution;

uniform sampler2D u_tex1;
uniform vec2 u_tex1Resolution;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


float random (in float x) {
    return fract(sin(x)*1e4);
}

void main () {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec2 offset = vec2(0.0);
    offset.x = texture2D(u_tex1,st).r*0.02;

    vec4 color = texture2D(u_tex0,st+offset);
    gl_FragColor = color;
}