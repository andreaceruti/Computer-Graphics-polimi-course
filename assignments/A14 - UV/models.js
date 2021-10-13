
function buildGeometry() {
	var i,j;
	// Draws a pyramid --- To complete for the assignment. This is just the one in Assignment 13, where two 0.1, 0.1 UV components have been added to the vertices definitions. Such number must be replaced (differently for each vertexes), to obtain a proper Egyptian Pyramid
		var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944, 0.625, 0.5],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.75, 0.25],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.5, 0.25],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0, 0.625, 0.5],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0, 0.5, 0.25],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0, 0.75, 0.25], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944, 0.625, 0.25],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.75, 0.0],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.5, 0.0], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0, 0.875, 0.5],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0, 1.0, 0.25],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0, 0.75, 0.25], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0, 0.75,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0, 0.75,0.25], [1.0,-1.0,1.0, 0.0,-1.0,0.0, 1.0,0.25], [-1.0,-1.0,1.0, 0.0,-1.0,0.0, 1.0,0.0]
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [[-1.0,-1.0,0.0, 0.0, 0.0,1.0, 0.125, 1.0 ], [1.0,-1.0,0.0, 0.0, 0.0,1.0, 0.25, 1.0], [1.0,1.0,0.0, 0.0, 0.0,1.0, 0.25, 0.875], [-1.0,1.0,0.0, 0.0, 0.0,1.0, 0.125, 0.875],
				[1.0,-1.0,0.0, 1.0, 0.0,0.0, 0.375, 0.625], [1.0,-1.0,-2.0, 1.0, 0.0,0.0,	0.25, 0.625], [1.0,1.0,-2.0, 1.0, 0.0,0.0, 0.25, 0.75], [1.0,1.0,0.0, 1.0, 0.0,0.0, 0.375, 0.75], 
				[1.0,-1.0,-2.0, 0.0, 0.0,-1.0, 0.25, 0.625], [-1.0,-1.0,-2.0, 0.0, 0.0,-1.0,	0.125,0.625], [-1.0,1.0,-2.0, 0.0, 0.0,-1.0, 0.125, 0.75], [1.0,1.0,-2.0, 0.0, 0.0,-1.0, 0.25, 0.75],
				[-1.0,-1.0,-2.0, -1.0, 0.0,0.0, 0.125, 0.625], [-1.0,-1.0,0.0, -1.0, 0.0,0.0, 0.0, 0.625], [-1.0,1.0,0.0, -1.0, 0.0,0.0, 0.0, 0.75], [-1.0,1.0,-2.0, -1.0, 0.0,0.0, 0.125, 0.75],
				[-1.0,1.0,0.0, 0.0, 1.0,0.0, 0.125, 0.875], [1.0,1.0,0.0, 0.0, 1.0,0.0,	0.25, 0.875], [1.0,1.0,-2.0, 0.0, 1.0,0.0, 0.25, 0.75], [-1.0,1.0,-2.0, 0.0, 1.0,0.0, 0.125, 0.75],
				[-1.0,-1.0,0.0, 0.0, -1.0,0.0, 0.125, 0.5], [1.0,-1.0,0.0, 0.0, -1.0,0.0,	0.25, 0.5], [1.0,-1.0,-2.0, 0.0, -1.0,0.0, 0.25, 0.625], [-1.0,-1.0,-2.0, 0.0, -1.0,0.0, 0.125, 0.625]];
				
	var ind2 = [0, 1, 2,  0, 2, 3,	4 ,5 ,7,	5, 6, 7,	8,9,11,	9,10,11,	12,13,14,	12,14,15, 16,17,18,	16,18,19,	20,23,22,	20,22,21];
	
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	
	
	// Draws a Cylinder --- To do for the assignment
		
	
	var points = 20;
	var x;
	var y;
	var z;
	var u;
	var v;
	var deltaAngle = 3.14;
	
	//lower part
	var vert3 = [[0.0,-1.0,0.0, 0.0,-1.0,0.0, 	0.875, 0.875]]; //lower central point
	
	for(i = 0; i < points; i++){
		x = Math.cos(deltaAngle);
		y = -1.0;
		z = Math.sin(deltaAngle);
		u = 0.875 + 0.125*Math.cos(2*Math.PI*i/points);
		v = 0.875 + 0.125*Math.sin(2*Math.PI*i/points);
		console.log(x, z, deltaAngle, u, v);
		vert3[i+1] = [x,y,z,	0,-1.0,0.0,		u,v];
		
		deltaAngle = deltaAngle + (2*Math.PI/points);
	}		
	
	var ind3 = [];
	for(i = 0; i < points - 1; i++){
		ind3[3*i] = 0;
		ind3[3*i + 1] = i + 1;
		ind3[3*i + 2] = i + 2;
	}
	
	ind3[3*(points - 1)] = 0;
	ind3[3*(points - 1) + 1] = points;
	ind3[3*(points - 1) + 2] = 1;
	
	//upper part
	vert3[points + 1] = [0.0,1.0,0.0, 0.0,1.0,0.0,	0.625, 0.875];
	
	deltaAngle = 3.14;
	
	for(i = points + 1; i < 2*points + 1; i++){
		x = Math.cos(deltaAngle);
		y = 1.0;
		z = Math.sin(deltaAngle);
		u = 0.625 + 0.125*Math.cos(2*Math.PI*i/points);
		v = 0.875 + 0.125*Math.sin(2*Math.PI*i/points);
		//console.log(x, z, deltaAngle, u, v);
		vert3[i+1] = [x,y,z,	0,1.0,0.0,		u,v];
		
		deltaAngle = deltaAngle + (2*Math.PI/points);
	}	
	
	for(i = points; i < 2*points - 1; i++){
		ind3[3*i] = points + 1;
		ind3[3*i + 1] = i + 3;
		ind3[3*i + 2] = i + 2;
	}
	
	ind3[3*(2*points - 1)] = points + 1;
	ind3[3*(2*points - 1) + 1] = points + 2;
	ind3[3*(2*points - 1) + 2] = 2*points + 1;
	
	//lateral part
	var normalX;
	var normalZ;
	var currentU = 1.0;
	var deltaU = 0.5/points;
	
	deltaAngle = 0.7;
	
	for(i = 0; i <= points; i++ ){
		normal_normalization = Math.sqrt(Math.pow(Math.cos(deltaAngle), 2) + Math.pow(Math.sin(deltaAngle), 2) );
		x = Math.cos(deltaAngle);
		z = Math.sin(deltaAngle);
		normalX = Math.cos(deltaAngle)/normal_normalization;
		normalZ = Math.sin(deltaAngle)/normal_normalization;
		
		
		vert3[(2*points + 2) + 2*i] = [x, -1.0, z, 		normalX, 0, normalZ,	currentU, 0.5];
		vert3[(2*points + 2) + 2*i + 1] = [x, 1.0, z,	normalX, 0, normalZ, 	currentU, 0.75];
		
		currentU = currentU - deltaU;
		deltaAngle = deltaAngle + (2*Math.PI/points);
	}
	
	//indexes
	for(i = 0; i < points - 1; i++){
		ind3[6*points + 6*i] = 2*points + 2 + 2*i;
		ind3[6*points + 6*i +1] = 2*points + 3 + 2*i;
		ind3[6*points + 6*i +2] = 2*points + 4 + 2*i;
		ind3[6*points + 6*i +3] = 2*points + 4 + 2*i;
		ind3[6*points + 6*i +4] = 2*points + 3 + 2*i;
		ind3[6*points + 6*i +5] = 2*points + 5 + 2*i;
	}
	
	
	//last 6 indexes
	ind3[6*points + 6*i] = 4*points;
	ind3[6*points + 6*i +1] = 4*points + 1;
	ind3[6*points + 6*i +2] = 4*points + 2;
	ind3[6*points + 6*i +3] = 4*points + 2;
	ind3[6*points + 6*i +4] = 4*points + 1;
	ind3[6*points + 6*i +5] = 4*points + 3;
	
	
	
	
	
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
}