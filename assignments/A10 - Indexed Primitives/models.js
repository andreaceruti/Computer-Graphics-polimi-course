function buildGeometry() {
	var i;
	

	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
	///// Creates vertices
	var vert2 = [];
	var  n_triangles = 100; //set how many triangles you want to use for the interval [-3,+3].  NB: after n = 200 strange things happens
	
	for(i = 0; i <= n_triangles; i++) { 
		for(j = 0; j <= n_triangles; j++) { 
			x = i*6/n_triangles - 3;		
			z = j*6/n_triangles - 3;		
			vert2[i*(n_triangles+1)+ j] = [x, Math.sin(x)*Math.cos(z), z];
		}
	}
	////// Creates indices
	var ind2 = [];
	for(i = 0; i < n_triangles; i++) {
		for(j = 0; j < n_triangles; j++) {
			ind2[6*(i*n_triangles+j)  ] = (n_triangles+1)*i+j;
			ind2[6*(i*n_triangles+j)+1] = (n_triangles+1)*i+j+1;
			ind2[6*(i*n_triangles+j)+2] = (n_triangles+1)*i+j+(n_triangles+1);
			ind2[6*(i*n_triangles+j)+3] = (n_triangles+1)*i+j+1;
			ind2[6*(i*n_triangles+j)+4] = (n_triangles+1)*i+j+(n_triangles+2);
			ind2[6*(i*n_triangles+j)+5] = (n_triangles+1)*i+j+(n_triangles+1);
		}
	}


	var color2 = [0.0, 0.0, 1.0];
	addMesh(vert2, ind2, color2);






	
	/*for(i = 9; i > 0; i--) {
	
		for(j = 0; j < 36; j++) {
		
			x = Math.sin(j*10.0/180.0*Math.PI)*Math.sin(i*10.0/180.0*Math.PI);
			y = Math.cos(i*10.0/180.0*Math.PI);
			z = Math.sin(j*10.0/180.0*Math.PI)*Math.cos(i*10.0/180.0*Math.PI);
			
			vert3[36*i+j] = [x, y, z];  //Math.sqrt(Math.abs(1-x*x-z*z))

		}
	}
	
	for ( k = 0; k <= 323; k++)
		console.log(k , vert3[k]);
		
	////// Creates indices
	var ind3 = [];
	for(i = 0; i < 8; i++) {
		for(j = 0; j < 36; j++) {
			ind3[6*(36*i+j)] = 36*i+j;
			ind3[6*(36*i+j)+1] = 36*i+j+36;
			ind3[6*(36*i+j)+2] = 36*i+j+1;
			ind3[6*(36*i+j)+3] = 36*i+j+36;
			ind3[6*(36*i+j)+4] = 36*i+j+37;
			ind3[6*(36*i+j)+5] = 36*i+j+1;
		}
	} */
	
	
	
	// Draws a Half Sphere
	///// Creates vertices
	var vert3 = [];
	
	//i è phi --> 18 circonferenze con diversa y
	//j è teta --> 100 punti su ogni circonferenza
	//1800 punti
	var n_circumferences = 18;
	var points_per_cirumference = 100;
	
	for(i = 0; i <= n_circumferences; i++) { 
		for(j = 0; j < points_per_cirumference; j++) { 
			x = Math.cos(Math.PI*i/(2*n_circumferences))*Math.cos(2*Math.PI*j/points_per_cirumference);	
			z = Math.cos(Math.PI*i/(2*n_circumferences))*Math.sin(2*Math.PI*j/points_per_cirumference);	
			y = Math.sin(Math.PI*i/(2*n_circumferences));
			vert3[i*(points_per_cirumference)+ j] = [x, y, z];
		}
	}
	
	console.log(vert3.length);
	console.log(vert3[1800]);
	
	////// Creates indices
	var ind3 = [];
	for(i = 0; i < n_circumferences; i++) {
		for(j = 0; j < points_per_cirumference - 1; j++) {
			ind3[6*(i*points_per_cirumference+j)  ] = points_per_cirumference*i+j;
			ind3[6*(i*points_per_cirumference+j)+1] = points_per_cirumference*(i+1)+j;
			ind3[6*(i*points_per_cirumference+j)+2] = points_per_cirumference*i+j+1;
			ind3[6*(i*points_per_cirumference+j)+3] = points_per_cirumference*i+j+1;
			ind3[6*(i*points_per_cirumference+j)+4] = points_per_cirumference*(i+1)+j;
			ind3[6*(i*points_per_cirumference+j)+5] = points_per_cirumference*(i+1)+j+1;
		}
	}
	console.log(ind3);
	
	//last slice
	var length = ind3.length;
	for (i = 0; i < n_circumferences; i++)
	{
		ind3[length + 6*i] = points_per_cirumference*i + points_per_cirumference - 1;
		ind3[length + 6*i + 1] = points_per_cirumference*(i+1) + points_per_cirumference - 1;
		ind3[length + 6*i + 2] = points_per_cirumference*i;
		ind3[length + 6*i + 3] = points_per_cirumference*i;
		ind3[length + 6*i + 4] = points_per_cirumference*(i+1) + points_per_cirumference - 1;
		ind3[length + 6*i + 5] = points_per_cirumference*(i+1);
	}
		
	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
}

