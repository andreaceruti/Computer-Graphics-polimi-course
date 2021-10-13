function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color  --> in slides Md
//vec4 ambColor;		// material ambient color
//vec4 specularColor;	// specular color --> in slides Ms
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface
//vec3 eyedirVec;		// looking direction --> Wr
//
//
// Lighr directions can be found into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution can be found intop
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material. No specular or emisssion.
var S1 = `
	vec4 LightAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LightBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LightCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	out_color = clamp(diffColor*(LightAcontr + LightBcontr + LightCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular. No ambient and emission.
var S2 = `

	vec4 dLightAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 dLightBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 dLightCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 diffuse = diffColor*(dLightAcontr + dLightBcontr + dLightCcontr);
	
	vec4 sLightAcontr = pow(clamp(dot(normalize(eyedirVec + lightDirA), normalVec), 0.0, 1.0), SpecShine) * lightColorA;
	vec4 sLightBcontr = pow(clamp(dot(normalize(eyedirVec + lightDirB), normalVec), 0.0, 1.0), SpecShine) * lightColorB;
	vec4 sLightCcontr = pow(clamp(dot(normalize(eyedirVec + lightDirC), normalVec), 0.0, 1.0), SpecShine) * lightColorC;
	vec4 specular = specularColor *(sLightAcontr + sLightBcontr + sLightCcontr);
	
	
	out_color = clamp(diffuse + specular, 0.0, 1.0);
`;

// Ambient and Phong specular. No emssion and no diffuse.
var S3 = `
	vec4 sLightAcontr = pow(clamp(dot( -reflect(lightDirA, normalVec) , eyedirVec) , 0.0, 1.0), SpecShine) * lightColorA;
	vec4 sLightBcontr = pow(clamp(dot( -reflect(lightDirB, normalVec) , eyedirVec) , 0.0, 1.0), SpecShine) * lightColorB;
	vec4 sLightCcontr = pow(clamp(dot( -reflect(lightDirC, normalVec) , eyedirVec) , 0.0, 1.0), SpecShine) * lightColorC;
	vec4 specular = specularColor *(sLightAcontr + sLightBcontr + sLightCcontr);
	
	out_color = clamp( specular + ambientLight*ambColor, 0.0, 1.0);
`;

// Diffuse, ambient, emission and Phong specular.
var S4 = `

	vec4 dLightAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 dLightBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 dLightCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 diffuse = diffColor * (dLightAcontr + dLightBcontr + dLightCcontr);
	
	vec4 sLightAcontr = pow(clamp(dot( -reflect(lightDirA, normalVec) , eyedirVec) , 0.0, 1.0), SpecShine) * lightColorA;
	vec4 sLightBcontr = pow(clamp(dot( -reflect(lightDirB, normalVec) , eyedirVec) , 0.0, 1.0), SpecShine) * lightColorB;
	vec4 sLightCcontr = pow(clamp(dot( -reflect(lightDirC, normalVec) , eyedirVec) , 0.0, 1.0), SpecShine) * lightColorC;
	vec4 specular = specularColor * (sLightAcontr + sLightBcontr + sLightCcontr);	
	
	
	out_color = clamp(diffuse + specular + ambientLight*ambColor + emit, 0.0, 1.0);
	
`;

// Ambient, Toon diffuse and and Toon (Blinn based) specular. No emission.
//for diffuseToon_x and specularToon_x see slides L13 p.38, the max(sign(...)) implements the if with m0 as black (0,0)
var S5 = `

	float LdotN_lightA = max(0.0, dot(normalVec, lightDirA)); 	
	vec4 LDcol_A = lightColorA * diffColor;
	vec4 diffuseToon_A = max(sign(LdotN_lightA - DToonTh),0.0) * LDcol_A; 
	
	float LdotN_lightB = max(0.0, dot(normalVec, lightDirB)); 	
	vec4 LDcol_B = lightColorB * diffColor;
	vec4 diffuseToon_B = max(sign(LdotN_lightB - DToonTh),0.0) * LDcol_B;
	
	float LdotN_lightC = max(0.0, dot(normalVec, lightDirC)); 	
	vec4 LDcol_C = lightColorC * diffColor;
	vec4 diffuseToon_C = max(sign(LdotN_lightC - DToonTh),0.0) * LDcol_C;
	
	vec4 diffuse = diffuseToon_A + diffuseToon_B + diffuseToon_C;
	
	
	
	vec3 halfVec_A = normalize(lightDirA + eyedirVec);
	float HdotN_A = max(dot(normalVec, halfVec_A), 0.0);	
	vec4 LScol_A = lightColorA * specularColor * max(sign(LdotN_lightA),0.0);
	vec4 specularToonB_A = max(sign(HdotN_A - SToonTh), 0.0) * LScol_A;
	
	vec3 halfVec_B = normalize(lightDirB + eyedirVec);
	float HdotN_B = max(dot(normalVec, halfVec_B), 0.0);	
	vec4 LScol_B = lightColorB * specularColor * max(sign(LdotN_lightB),0.0);
	vec4 specularToonB_B = max(sign(HdotN_B - SToonTh), 0.0) * LScol_B;
	
	vec3 halfVec_C = normalize(lightDirC + eyedirVec);
	float HdotN_C = max(dot(normalVec, halfVec_C), 0.0);	
	vec4 LScol_C = lightColorC * specularColor * max(sign(LdotN_lightC),0.0);
	vec4 specularToonB_C = max(sign(HdotN_C - SToonTh), 0.0) * LScol_C;
	
	vec4 specular = specularToonB_A + specularToonB_B + specularToonB_C;
	
		
	out_color = clamp(diffuse + specular + ambientLight*ambColor, 0.0, 1.0);
`;

	return [S1, S2, S3, S4, S5];
}

