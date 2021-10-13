function buildGeometry() {
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0], [-1.0,-1.0,1.0, 0.0,-1.0,0.0],
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [[-1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,1.0,0.0, 0.0, 0.0,1.0], [-1.0,1.0,0.0, 0.0, 0.0,1.0],
				[1.0,-1.0,0.0, 1.0, 0.0,0.0], [1.0,-1.0,-2.0, 1.0, 0.0,0.0], [1.0,1.0,-2.0, 1.0, 0.0,0.0], [1.0,1.0,0.0, 1.0, 0.0,0.0], 
				[1.0,-1.0,-2.0, 0.0, 0.0,-1.0], [-1.0,-1.0,-2.0, 0.0, 0.0,-1.0], [-1.0,1.0,-2.0, 0.0, 0.0,-1.0], [1.0,1.0,-2.0, 0.0, 0.0,-1.0],
				[-1.0,-1.0,-2.0, -1.0, 0.0,0.0], [-1.0,-1.0,0.0, -1.0, 0.0,0.0], [-1.0,1.0,0.0, -1.0, 0.0,0.0], [-1.0,1.0,-2.0, -1.0, 0.0,0.0],
				[-1.0,1.0,0.0, 0.0, 1.0,0.0], [1.0,1.0,0.0, 0.0, 1.0,0.0], [1.0,1.0,-2.0, 0.0, 1.0,0.0], [-1.0,1.0,-2.0, 0.0, 1.0,0.0],
				[-1.0,-1.0,0.0, 0.0, -1.0,0.0], [1.0,-1.0,0.0, 0.0, -1.0,0.0], [1.0,-1.0,-2.0, 0.0, -1.0,0.0], [-1.0,-1.0,-2.0, 0.0, -1.0,0.0]];
	var ind2 = [0, 1, 2,  0, 2, 3,	4 ,5 ,7,	5, 6, 7,	8,9,11,	9,10,11,	12,13,14,	12,14,15, 16,17,18,	16,18,19,	20,23,22,	20,22,21];
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	
	
	
	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.
	var vert3 = [];
	var  n_triangles = 20; //set how many triangles you want to use for the interval [-3,+3].  NB: after n = 200 strange things happen
	var vect3_normalization = 0;
	
	for(i = 0; i <= n_triangles; i++) { 
		for(j = 0; j <= n_triangles; j++) { 
			x = i*6/n_triangles - 3;    
			z = j*6/n_triangles - 3;
			vect3_normalization = Math.sqrt(Math.pow(Math.cos(x), 2)*Math.pow(Math.cos(z), 2) + 1 + Math.pow(Math.sin(z), 2)*Math.pow(Math.sin(x), 2)  );
			
			vert3[i*(n_triangles+1)+ j] = [x, Math.sin(x) * Math.cos(z), z, -Math.cos(x)*Math.cos(z)/vect3_normalization, 1/vect3_normalization, (Math.sin(x)*Math.sin(z))/vect3_normalization];
		}
	}
	////// Creates indices
	var ind3 = [];
	for(i = 0; i < n_triangles; i++) {
		for(j = 0; j < n_triangles; j++) {
			ind3[6*(i*n_triangles+j)  ] = (n_triangles+1)*i+j;
			ind3[6*(i*n_triangles+j)+1] = (n_triangles+1)*i+j+1;
			ind3[6*(i*n_triangles+j)+2] = (n_triangles+1)*i+j+(n_triangles+1);
			ind3[6*(i*n_triangles+j)+3] = (n_triangles+1)*i+j+1;
			ind3[6*(i*n_triangles+j)+4] = (n_triangles+1)*i+j+(n_triangles+2);
			ind3[6*(i*n_triangles+j)+5] = (n_triangles+1)*i+j+(n_triangles+1);
		}
	}

	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
	
	//************************************************************************************************************************************//
	//************************************************************************************************************************************//	
	//************************************************************************************************************************************//
	//************************************************************************************************************************************//
	
	
	// Draws a Cylinder --- To do for the assignment
	
	var vert4 = [[0.0,-1.0,0.0, 0.0,-1.0,0.0]]; //lower central point
	var points_per_circumference_cil = 50;
	var x = 0;
	var y = 0;
	var z = 0;
	
	//lower cap
	for (i = 0; i < points_per_circumference_cil ; i++){
		x = Math.cos(2*Math.PI*i/points_per_circumference_cil);
		y = -1.0;
		z = Math.sin(2*Math.PI*i/points_per_circumference_cil);
		vert4[i+1] = [x,y,z, 0.0, -1,0, 0,0];
	}
	
	var ind4 = [];
	
	for (i = 0; i < points_per_circumference_cil - 1; i++){
		ind4[3*(i)  ] = 0;
		ind4[3*(i)+1] = i+1;
		ind4[3*(i)+2] = i+2;
	}
	
	ind4[3*(points_per_circumference_cil - 1)] = 0;
	ind4[3*(points_per_circumference_cil - 1) + 1] = points_per_circumference_cil;
	ind4[3*(points_per_circumference_cil - 1) + 2] = 1;
	
	//upper cap
	vert4[points_per_circumference_cil + 1] = [0.0,1.0,0.0, 0.0,1.0,0.0];
	for (i = points_per_circumference_cil + 1; i < 2*(points_per_circumference_cil) + 1 ; i++){
		x = Math.cos(2*Math.PI*i/points_per_circumference_cil);
		y = 1.0;
		z = Math.sin(2*Math.PI*i/points_per_circumference_cil);
		vert4[i+1] = [x,y,z, 0.0, 1,0, 0,0];
	}
	
	for (i = points_per_circumference_cil; i < 2*(points_per_circumference_cil) - 1; i++){
		ind4[3*(i)  ] = points_per_circumference_cil + 1;
		ind4[3*(i)+1] = i+3;
		ind4[3*(i)+2] = i+2;
	}
	
	ind4[3*(2*(points_per_circumference_cil) - 1)] = points_per_circumference_cil + 1;
	ind4[3*(2*(points_per_circumference_cil) - 1) + 1] = points_per_circumference_cil + 2;
	ind4[3*(2*(points_per_circumference_cil) - 1) + 2] = 2*points_per_circumference_cil + 1;
	
	var normal_normalization = 0.0;
	
	//lateral part
	//vertices
	for(i = 0; i < points_per_circumference_cil; i++ ){
		normal_normalization = Math.sqrt(Math.pow(Math.cos(2*Math.PI*i/points_per_circumference_cil), 2) + Math.pow(Math.sin(2*Math.PI*i/points_per_circumference_cil), 2) );
		vert4[(2*points_per_circumference_cil + 2) + 2*i] = [Math.cos(2*Math.PI*i/points_per_circumference_cil), -1.0, Math.sin(2*Math.PI*i/points_per_circumference_cil), 		Math.cos(2*Math.PI*i/points_per_circumference_cil)/normal_normalization, 0, Math.sin(2*Math.PI*i/points_per_circumference_cil)/normal_normalization];
		vert4[(2*points_per_circumference_cil + 2) + 2*i + 1] = [Math.cos(2*Math.PI*i/points_per_circumference_cil), 1.0, Math.sin(2*Math.PI*i/points_per_circumference_cil),	Math.cos(2*Math.PI*i/points_per_circumference_cil)/normal_normalization, 0, Math.sin(2*Math.PI*i/points_per_circumference_cil)/normal_normalization];
	}
	
	//indexes
	for(i = 0; i < points_per_circumference_cil - 1; i++){
		ind4[6*points_per_circumference_cil + 6*i] = 2*points_per_circumference_cil + 2 + 2*i;
		ind4[6*points_per_circumference_cil + 6*i +1] = 2*points_per_circumference_cil + 3 + 2*i;
		ind4[6*points_per_circumference_cil + 6*i +2] = 2*points_per_circumference_cil + 4 + 2*i;
		ind4[6*points_per_circumference_cil + 6*i +3] = 2*points_per_circumference_cil + 4 + 2*i;
		ind4[6*points_per_circumference_cil + 6*i +4] = 2*points_per_circumference_cil + 3 + 2*i;
		ind4[6*points_per_circumference_cil + 6*i +5] = 2*points_per_circumference_cil + 5 + 2*i;
	}
	
	//last 6 indexes
	ind4[6*points_per_circumference_cil + 6*i] = 4*points_per_circumference_cil;
	ind4[6*points_per_circumference_cil + 6*i +1] = 4*points_per_circumference_cil + 1;
	ind4[6*points_per_circumference_cil + 6*i +2] = 2*points_per_circumference_cil + 2;
	ind4[6*points_per_circumference_cil + 6*i +3] = 2*points_per_circumference_cil + 2;
	ind4[6*points_per_circumference_cil + 6*i +4] = 4*points_per_circumference_cil + 1;
	ind4[6*points_per_circumference_cil + 6*i +5] = 2*points_per_circumference_cil + 3;
	
	
	
	var color4 = [1.0, 1.0, 0.0];
	
	
	addMesh(vert4, ind4, color4);
	
	//************************************************************************************************************************************//
	//************************************************************************************************************************************//	
	//************************************************************************************************************************************//
	//************************************************************************************************************************************//
	

	// Draws a Sphere --- To do for the assignment.
	
	//var vert5 = [[-1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,1.0,0.0, 0.0, 0.0,1.0], [-1.0,1.0,0.0, 0.0, 0.0,1.0]];
	//var ind5 = [0, 1, 2,  0, 2, 3];
	//var color5 = [1.0, 0.0, 0.0];
	//addMesh(vert5, ind5, color5);

	///// Creates vertices
	var vert5 = [];
  
	//i è phi --> 18 circonferenze con diversa y
	//j è teta --> 100 punti su ogni circonferenza
	//1800 punti
	var n_circumferences = 10;
	var points_per_cirumference = 50;
	
	var normal_normalization_sphere = 0;
	
	for(i = 0; i <= n_circumferences; i++) { 
		for(j = 0; j < points_per_cirumference; j++) { 
			x = Math.cos(Math.PI*i/(2*n_circumferences))*Math.cos(2*Math.PI*j/points_per_cirumference);  
			z = Math.cos(Math.PI*i/(2*n_circumferences))*Math.sin(2*Math.PI*j/points_per_cirumference);  
			y = Math.sin(Math.PI*i/(2*n_circumferences));
			
			normal_normalization_sphere = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
			
			vert5[i*(points_per_cirumference)+ j] = [x, y, z, x/normal_normalization_sphere, y/normal_normalization_sphere, z/normal_normalization_sphere];
		}
	}
	  
	  
	////// Creates indices
	var ind5 = [];
	for(i = 0; i < n_circumferences; i++) {
		for(j = 0; j < points_per_cirumference - 1; j++) {
			ind5[6*(i*points_per_cirumference+j)  ] = points_per_cirumference*i+j;
			ind5[6*(i*points_per_cirumference+j)+1] = points_per_cirumference*(i+1)+j;
			ind5[6*(i*points_per_cirumference+j)+2] = points_per_cirumference*i+j+1;
			ind5[6*(i*points_per_cirumference+j)+3] = points_per_cirumference*i+j+1;
			ind5[6*(i*points_per_cirumference+j)+4] = points_per_cirumference*(i+1)+j;
			ind5[6*(i*points_per_cirumference+j)+5] = points_per_cirumference*(i+1)+j+1;
		}
	}
	console.log(ind5.length);
	  
	//last slice
	var length = ind5.length;
	for (i = 0; i < n_circumferences; i++)
	{
		ind5[length + 6*i] = points_per_cirumference*i + points_per_cirumference - 1;
		ind5[length + 6*i + 1] = points_per_cirumference*(i+1) + points_per_cirumference - 1;
		ind5[length + 6*i + 2] = points_per_cirumference*i;
		ind5[length + 6*i + 3] = points_per_cirumference*i;
		ind5[length + 6*i + 4] = points_per_cirumference*(i+1) + points_per_cirumference - 1;
		ind5[length + 6*i + 5] = points_per_cirumference*(i+1);
	}
	
	console.log(ind5.length);
	
	var vertexOffset = vert5.length;
	var indexOffset = ind5.length;
	
	//inferior part
	for(i = 0; i <= n_circumferences; i++) { 
		for(j = 0; j < points_per_cirumference; j++) { 
			x = Math.cos(Math.PI*i/(2*n_circumferences))*Math.cos(2*Math.PI*j/points_per_cirumference);  
			z = Math.cos(Math.PI*i/(2*n_circumferences))*Math.sin(2*Math.PI*j/points_per_cirumference);  
			y = -Math.sin(Math.PI*i/(2*n_circumferences));
			
			normal_normalization_sphere = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
			
			vert5[vertexOffset + i*(points_per_cirumference)+ j] = [x, y, z, x/normal_normalization_sphere, y/normal_normalization_sphere, z/normal_normalization_sphere];
		}
	}
	
	for(i = 0; i < n_circumferences; i++) {
		for(j = 0; j < points_per_cirumference - 1; j++) {
			ind5[indexOffset + 6*(i*points_per_cirumference+j)  ] = vertexOffset + points_per_cirumference*i+j;
			ind5[indexOffset + 6*(i*points_per_cirumference+j)+1] = vertexOffset + points_per_cirumference*i+j+1;
			ind5[indexOffset + 6*(i*points_per_cirumference+j)+2] = vertexOffset + points_per_cirumference*(i+1)+j; 
			ind5[indexOffset + 6*(i*points_per_cirumference+j)+3] = vertexOffset + points_per_cirumference*i+j+1;
			ind5[indexOffset + 6*(i*points_per_cirumference+j)+4] = vertexOffset + points_per_cirumference*(i+1)+j + 1;
			ind5[indexOffset + 6*(i*points_per_cirumference+j)+5] = vertexOffset + points_per_cirumference*(i+1)+j;
		}
	}
	
	//last slice
	length = ind5.length;
	for (i = 0; i < n_circumferences; i++)
	{
		ind5[indexOffset + length + 6*i] = vertexOffset + points_per_cirumference*i + points_per_cirumference - 1;
		ind5[indexOffset + length + 6*i + 1] = vertexOffset + points_per_cirumference*i;
		ind5[indexOffset + length + 6*i + 2] = vertexOffset + points_per_cirumference*(i+1) + points_per_cirumference - 1;
		ind5[indexOffset + length + 6*i + 3] = vertexOffset + points_per_cirumference*i;
		ind5[indexOffset + length + 6*i + 4] = vertexOffset + points_per_cirumference*(i+1);
		ind5[indexOffset + length + 6*i + 5] = vertexOffset + points_per_cirumference*(i+1) + points_per_cirumference - 1;
	}
	
		
	var color5 = [1.0, 0.0, 0.0];
	addMesh(vert5, ind5, color5);
}

