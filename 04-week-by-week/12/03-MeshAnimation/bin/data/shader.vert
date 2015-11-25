#version 120

uniform sampler2D u_tex0;
uniform vec2 u_tex0Resolution;

uniform vec2 u_resolution;
uniform float u_time;

void main(){
	gl_TexCoord[0] = gl_MultiTexCoord0;

	float elevation = texture2D(u_tex0, fract(gl_TexCoord[0].xy+vec2(u_time,0.))).r;

	vec4 vertex = gl_Vertex;
	float pct = pow(1.0-gl_TexCoord[0].x,2.)*100.;
	vertex.z -= elevation*pct;

	gl_Position = gl_ModelViewProjectionMatrix * vertex;
	gl_FrontColor = gl_Color;
}
