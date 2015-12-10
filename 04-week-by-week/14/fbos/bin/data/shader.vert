#version 120

uniform sampler2D u_tex0;
uniform sampler2D u_tex1;

uniform vec2 u_resolution;
uniform float u_time;

void main(){
	gl_TexCoord[0] = gl_MultiTexCoord0;

	float elevation = texture2D(u_tex0,gl_TexCoord[0].xy).r;

	vec4 vertex = gl_Vertex;
	vertex.z -= elevation*100.;

	gl_Position = gl_ModelViewProjectionMatrix * vertex;
	gl_FrontColor = gl_Color;
}
