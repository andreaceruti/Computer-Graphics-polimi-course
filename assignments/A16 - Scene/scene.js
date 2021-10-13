function drawSceneTree(S) {
	var i;
	var j;
	var local_matrices = [];

	var temp_matrix;

	//initialization
	for(i = 0; i < S.length; i++){
		local_matrices[i] = utils.identityMatrix();
	}

	//calculate the local matrix and cascade the transformation to DIRECT sons
	for(i = 0; i < S.length; i++) {
		temp_matrix = utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
			 utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
			 utils.MakeRotateZMatrix(S[i][5])),
			 utils.MakeRotateXMatrix(S[i][3])),
			 utils.MakeRotateYMatrix(S[i][4]));

		local_matrices[i] = utils.multiplyMatrices(local_matrices[i], temp_matrix)	;


		if (S[i][6] != -1){
			for (j = S[i][6]; j <= S[i][7] ; j++){
				local_matrices[j] = utils.multiplyMatrices(local_matrices[j], local_matrices[i]);
			}
		}
	}

	//draw scene
	for(i = 0; i < S.length; i++){
		draw(i, local_matrices[i]);
	}

}