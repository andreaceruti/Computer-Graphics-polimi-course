function view() {
	//import all from './lib/utils.js'
	
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	var translation = utils.MakeTranslateMatrix(-5, -2.5, 0);
	var rotateY = utils.MakeRotateYMatrix(-90);
	var rotateX = utils.MakeRotateXMatrix(30);
	
	var A1 = utils.multiplyMatrices( rotateX, rotateY);
	A1 = utils.multiplyMatrices( A1, translation);
	
			   
	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	var translation = utils.MakeTranslateMatrix(0, 1, 5);
	var rotateY = utils.MakeRotateYMatrix(-170);
	var rotateX = utils.MakeRotateXMatrix(-15);
	var rotateZ = utils.MakeRotateZMatrix(-45);
	
	var A2 = utils.multiplyMatrices( rotateZ, rotateX);
	A2 = utils.multiplyMatrices( A2, rotateY);
	A2 = utils.multiplyMatrices( A2, translation);
			   
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
	var c = [-4, 2, -4];
	var a = [0, 0.5, 0.5];
	var u = [0, 1, 0];
	
	var vz = [];
	vz = [ c[0] - a[0], c[1] - a[1], c[2] - a[2]] ;
	vz = utils.normalizeVector3(vz);
	
	
	
	var vx = [];
	vx = utils.crossVector(u, vz);
	vx = utils.normalizeVector3(vx);
	
	console.log(vx);
	
	var vy = [];
	vy = utils.crossVector(vz, vx);
	
	var cameraMatrix = [ 	vx[0],		vy[0],		vz[0],		c[0],
							vx[1],		vy[1],		vz[1],		c[1],
							vx[2],		vy[2],		vz[2],		c[2],
							0.0,		0.0,		0.0,		1.0];
	
	
	var A3 =  utils.invertMatrix(cameraMatrix);
		
	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
	var c = [2.57, 0, 0];
	var a = [2.8, 0, -1];
	var u = [1, 0, 0];
	
	var vz = [];
	vz = [ c[0] - a[0], c[1] - a[1], c[2] - a[2]] ;
	vz = utils.normalizeVector3(vz);
	
	var vx = [];
	vx = utils.crossVector(u, vz);
	vx = utils.normalizeVector3(vx);
	
	console.log(vx);
	
	var vy = [];
	vy = utils.crossVector(vz, vx);
	
	var cameraMatrix = [ 	vx[0],		vy[0],		vz[0],		c[0],
							vx[1],		vy[1],		vz[1],		c[1],
							vx[2],		vy[2],		vz[2],		c[2],
							0.0,		0.0,		0.0,		1.0];
	
	
	var A4 =  utils.invertMatrix(cameraMatrix);
			   
	return [A1, A2, A3, A4];
}