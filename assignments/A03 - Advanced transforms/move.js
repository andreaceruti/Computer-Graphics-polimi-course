function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.
	var translation = utils.MakeTranslateMatrix(0,1,-1);
	var rotationY = utils.MakeRotateYMatrix(15);
	var rotationZ = utils.MakeRotateZMatrix(45);
	var rotationX = utils.MakeRotateXMatrix(60);
	
	var temp = utils.multiplyMatrices(translation, rotationY);
	temp = utils.multiplyMatrices(temp, rotationZ);
	temp = utils.multiplyMatrices(temp, rotationX);
	temp = utils.multiplyMatrices(temp, utils.invertMatrix(rotationZ));
	temp = utils.multiplyMatrices(temp, utils.invertMatrix(rotationY));
	
	
	var R1 = utils.multiplyMatrices(temp, utils.invertMatrix(translation));
	
	
	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane.			   
	var rotation  = utils.MakeRotateZMatrix(45);
	var scaling = utils.MakeScaleNuMatrix(0.5, 1, 1);
	
	var temp = utils.multiplyMatrices(rotation, scaling);
	
	var S1 = utils.multiplyMatrices(temp, utils.invertMatrix(rotation));
	
			   
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	var translation = utils.MakeTranslateMatrix(1,1,1);
	var rotation = utils.MakeRotateXMatrix(15);
	var scaling = utils.MakeScaleNuMatrix(1,-1,1);
	
	var temp = utils.multiplyMatrices(translation, rotation);
	temp = utils.multiplyMatrices(temp, scaling);
	temp = utils.multiplyMatrices(temp, utils.invertMatrix(rotation));
	
	var S2 = utils.multiplyMatrices(temp, utils.invertMatrix(translation));
	
			   
	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	var rotationY = utils.MakeRotateYMatrix(30);
	var translation = utils.MakeTranslateMatrix(0,0,5);
	var scale = utils.MakeScaleMatrix(3);
	
	var temp = utils.multiplyMatrices( utils.invertMatrix(rotationY), utils.invertMatrix(translation) );
	
	var I1 = utils.multiplyMatrices( temp, utils.invertMatrix(scale) );
	
	

	return [R1, S1, S2, I1];
}

