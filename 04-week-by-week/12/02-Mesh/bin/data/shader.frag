#version 120

uniform sampler2D u_tex0;
uniform vec2 u_tex0Resolution;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
	vec2 st = gl_TexCoord[0].st; //gl_FragCoord.xy/u_resolution;
    vec4 color = vec4(vec3(0.),1.);
    
    color.rg = st;
    color = texture2D(u_tex0, st);

	gl_FragColor = color;
}
