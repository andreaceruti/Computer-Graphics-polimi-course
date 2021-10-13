function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	
	var translation = utils.MakeTranslateMatrix(0,0,-3);
	var rotationY = utils.MakeRotateYMatrix(90);
	
	var A1 = utils.multiplyMatrices( translation, rotationY);
	
			   
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	
	var translation = utils.MakeTranslateMatrix(0,2,0);
	var rotationX = utils.MakeRotateXMatrix(60);
	var scaling = utils.MakeScaleMatrix(1/10);
	
	var A2 = utils.multiplyMatrices(translation, rotationX);
	A2 = utils.multiplyMatrices(A2, scaling);
	
	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45
	
	
	var rotationY = utils.MakeRotateYMatrix(30);
	var rotationZ = utils.MakeRotateZMatrix(45);
	
	var A3 = utils.multiplyMatrices(rotationY, rotationZ);
	
			   
	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider
	
	var translation = utils.MakeTranslateMatrix(2,0,2);
	var rotationY = utils.MakeRotateYMatrix(180);
	var scaling = utils.MakeScaleNuMatrix(2,1,1);
	
	var A4 = utils.multiplyMatrices(translation, rotationY);
	A4 = utils.multiplyMatrices(A4, scaling);

	// Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)
	
	var translation = utils.MakeTranslateMatrix(1,-1,2.5);
	var rotationX = utils.MakeRotateXMatrix(45);
	var rotationY = utils.MakeRotateYMatrix(-30);
	var rotationZ = utils.MakeRotateZMatrix(-15);
	var scaling = utils.MakeScaleNuMatrix(0.8, 0.75, 1.2);
	
	var A5 = utils.multiplyMatrices(translation, rotationY);
	A5 = utils.multiplyMatrices(A5, rotationX);
	A5 = utils.multiplyMatrices(A5, rotationZ);
	A5 = utils.multiplyMatrices(A5, scaling);

	return [A1, A2, A3, A4, A5];
}