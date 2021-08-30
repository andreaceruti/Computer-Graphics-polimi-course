#version 300 es

precision mediump float;

in vec3 fsNormal;
in vec3 fs_pos;
in vec2 fsUV;

uniform sampler2D in_texture;

uniform vec3 specularBlinnColor;
uniform float specularBlinnShine;
uniform vec3 diffuseColor;

//directional light
uniform vec3 directionalLightDirection;
uniform vec3 directionalLightColor;

//ambient
uniform vec3 ambientLight;
uniform vec3 ambientColor;

out vec4 outColor;

void main() {
  //normalize fsNormal, it might not be in the normalized form coming from the vs
  vec3 nNormal = normalize(fsNormal);

  vec3 nDirectionalLightDirection = normalize(directionalLightDirection);

  //lambert diffuse component
  vec3 lambertDiffuseColor = diffuseColor * clamp(dot(nDirectionalLightDirection, nNormal), 0.0, 1.0) * directionalLightColor;

  //ambient color
  vec3 ambient = ambientLight * ambientColor;

  //Blinn specular color
  vec3 eyeDirection = vec3(normalize(-fs_pos));
  vec3 blinnSpecularColor = specularBlinnColor * pow(clamp(dot(nNormal,normalize(nDirectionalLightDirection + eyeDirection)),0.0,1.0),specularBlinnShine) * directionalLightColor;

  //computing BRDF color
  vec4 color = vec4(clamp(lambertDiffuseColor + blinnSpecularColor + ambient, 0.0, 1.0).rgb ,1.0);


  outColor = color * texture(in_texture, fsUV);
}