#version 120

uniform sampler2D u_tex0;
uniform sampler2D u_tex1;

uniform vec2 u_resolution;
uniform float u_time;

struct DirectionalLight {
	vec3 ambient;
	vec3 diffuse;
	vec3 dir;
};
DirectionalLight light;


void main() {
	vec2 st = gl_TexCoord[0].st; //gl_FragCoord.xy/u_resolution;
    vec4 color = vec4(vec3(0.),1.);

    light.ambient = vec3(0.,0.,.1);
    light.diffuse = vec3(1.,.5,0.);
    light.dir = vec3(sin(u_time),-.5,.1);

    vec3 normal = texture2D(u_tex1,st).rgb*2.0-1.;

    color.rbg += light.ambient;
    color.rgb += light.diffuse * dot(light.dir, normal);

	gl_FragColor = color;
}
