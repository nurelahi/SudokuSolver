function lol ()
{
	alert ("hello");
}


sudokuSolver.view.homepage = ({
	constructor: function(){
		console.log("asdad");
	},
	
	createSudoku: function (){
		var input_tag;
		for (var i=0; i<9; i++){
			for (var j=0; j<9; j++){
				if (j<3 || j>5){
					input_tag = '<input id="'+i+j+'" class="input_box cube2" type="number" min="1" max="9">';
					$("#puzzle-grid").append(input_tag);
				}
				else{
					input_tag = '<input id="'+i+j+'" class="input_box cube2" type="number" min="1" max="9">';
					$("#puzzle-grid").append(input_tag);
				}
				input_tag = '';
			}
		}
	},
	
	CLASS_NAME: 'sudokuSolver.view.homepage'
});