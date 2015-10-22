#version 120

uniform vec2 u_resolution;
uniform float u_time;

varying vec3 v_normal;

void main(){
	gl_TexCoord[0] = gl_MultiTexCoord0;
	vec4 pos = gl_ProjectionMatrix * gl_ModelViewMatrix * gl_Vertex;
	pos.x += sin(pos.y+u_time)*10.;
	gl_Position = pos;
	gl_FrontColor =  gl_Color;
	v_normal =  gl_Normal;
}
