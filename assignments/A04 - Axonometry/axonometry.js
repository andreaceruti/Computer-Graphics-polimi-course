function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	var w = 50;
	var a = 1.777777777778;
	var n = 1;
	var f = 101;
	
	var mat =  [ 1/w ,	0.0,		0.0,		0.0,
			   0.0,		a/w,		0.0,		0.0,
			   0.0,		0.0,		-2/(f-n),		-((f+n)/(f-n)),
			   0.0,		0.0,		0.0,		1.0];
			   
	var rotationY = utils.MakeRotateYMatrix(45);
	var rotationX = utils.MakeRotateXMatrix(35.26);
	
	var A1 = utils.multiplyMatrices(mat, rotationX);
	var A1 = utils.multiplyMatrices(A1, rotationY);
			   
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	
	var mat =  [ 1/w ,	0.0,		0.0,		0.0,
			   0.0,		a/w,		0.0,		0.0,
			   0.0,		0.0,		-2/(f-n),		-((f+n)/(f-n)),
			   0.0,		0.0,		0.0,		1.0];
	var rotationY = utils.MakeRotateYMatrix(45);
	var rotationX = utils.MakeRotateXMatrix(20);
	
	var A2 = utils.multiplyMatrices(mat, rotationX);
	var A2 = utils.multiplyMatrices(A2, rotationY);
			   
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	
	var mat =  [ 1/w ,	0.0,		0.0,		0.0,
			   0.0,		a/w,		0.0,		0.0,
			   0.0,		0.0,		-2/(f-n),		-((f+n)/(f-n)),
			   0.0,		0.0,		0.0,		1.0];
	var rotationY = utils.MakeRotateYMatrix(30);
	var rotationX = utils.MakeRotateXMatrix(-30);
	
	var A3 = utils.multiplyMatrices(mat, rotationX);
	var A3 = utils.multiplyMatrices(A3, rotationY);
			   
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	
	var mat =  [ 1/w ,	0.0,		0.0,		0.0,
			   0.0,		a/w,		0.0,		0.0,
			   0.0,		0.0,		-2/(f-n),		-((f+n)/(f-n)),
			   0.0,		0.0,		0.0,		1.0];
			   
	var cavalier =  [1.0,	0.0,		-Math.cos(utils.degToRad(45)),		0.0,
			   0.0,		1.0,		-Math.sin(utils.degToRad(45)),		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
    var O1 = utils.multiplyMatrices(mat, cavalier);

	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	
	var mat =  [ 1/w ,	0.0,		0.0,		0.0,
			   0.0,		a/w,		0.0,		0.0,
			   0.0,		0.0,		-2/(f-n),		-((f+n)/(f-n)),
			   0.0,		0.0,		0.0,		1.0];
			   
	var cabinet =  [1.0,	0.0,		-0.5*Math.cos(utils.degToRad(60)),		0.0,
			   0.0,		1.0,		-0.5*Math.sin(utils.degToRad(60)),		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	var O2 = utils.multiplyMatrices(mat, cabinet);

	return [A1, A2, A3, O1, O2];
}