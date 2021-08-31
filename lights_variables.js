
// directional light
var directionalLightAlpha;
var directionalLightBeta;
var directionalLightDirection;

/*var directionalLightDirection = [-Math.cos(dirLightAlpha) * Math.cos(dirLightBeta),
                -Math.sin(dirLightAlpha),
                -Math.cos(dirLightAlpha) * Math.sin(dirLightBeta)];*/
                
var directionalLightColor = [1.0, 1.0, 1.0];

// define ambient light and color
var ambientLightColor = [1.0, 1.0, 1.0];
var ambientColor = [0.5, 0.5, 0.5];

// define material color
var materialDiffuseColor = [1.0, 1.0, 1.0]; // this will be multiplied by the texture color

//define specular component of color
var specularBlinnColor = [1.0, 1.0, 1.0];
var specularBlinnShine = 1.0;
//*************************************************************************************************************
//direct or point light
var lightType;

//0,0 --> none 
//1,0--> lambert
//0,1 -->toon
var diffuseType;

//specular type
var specularType;

var ambientMaterialColor = [1.0 , 1.0, 1.0]; //white by default

var lightDecay = 0.5;
var lightTarget = 1.0;

var lightPosition = [2.5, 1.5, 1.0]; // the position of the point light

var lightDirection = [-1.0, 1.0, 1.0]; // the direction of the direct light

var specularColor = [0.4, 0.4, 0.4];

var diffuseColor = [0.6, 0.6, 0.6];

var specShine = 0.7;

var DToonTh = 0.8;

var SToonTh = 0.2;

var lightColor = [0.5, 0.5, 0.5];