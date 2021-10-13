function Anim1(t) {
	// moving car	
	
	var time_translation = utils.MakeTranslateMatrix(0.25*t ,0.5,0);
	var scaling = utils.MakeScaleMatrix(0.25);
	
	
	var out = 	utils.multiplyMatrices(time_translation, scaling);	
	return out;
}

function Anim2(t) {
	// bumping code
	
	var time_translation = utils.MakeTranslateMatrix(0, 0.25 - Math.abs(0.5*t - 0.25) , 0);
	var uv_translation = utils.MakeTranslateMatrix(0.75, 0.5, 0);	
	var scaling = utils.MakeScaleMatrix(0.25);
	
	var out = utils.multiplyMatrices(utils.multiplyMatrices(time_translation, uv_translation), scaling);	
	return out;
}

function Anim3(t) {
	// rotating fan
	
	//center uv_coord
	var uv_translation = utils.MakeTranslateMatrix(0.5, 0.75, 0);
	var scaling = utils.MakeScaleMatrix(0.25); 	
	//rotation around arbitrary axis
	var center_translation = utils.MakeTranslateMatrix(0.125, 0.125, 0);	
	var rotation = utils.MakeRotateZMatrix(360*t);	
	
	var rotation_around_center = utils.multiplyMatrices(center_translation, utils.multiplyMatrices(rotation, utils.invertMatrix(center_translation)));
	var out = utils.multiplyMatrices(uv_translation, utils.multiplyMatrices(rotation_around_center, scaling));	
	return out;
}

function Anim4(t) {
	// buring flame	
	
	var frame_value = Math.floor(t*72); //0-71	
	var row = Math.floor(frame_value/12); //starting from 0, 0-5	
	var column = (frame_value % 12); //starting from 0, 0-11
	
	//box construction
	var side_length_single_frame = 1 / 12; //0.08333333333333333
	
	//first frame is at
	var initial_v = 0.5 - side_length_single_frame; 
	var initial_u = 0.0;
	
	var scaling_matrix = utils.MakeScaleMatrix(0.25/3);
	var translate_matrix = utils.MakeTranslateMatrix(initial_u + column*side_length_single_frame, initial_v - row*side_length_single_frame, 0);
	
	var out = utils.multiplyMatrices(translate_matrix, scaling_matrix);	
	return out;
}
