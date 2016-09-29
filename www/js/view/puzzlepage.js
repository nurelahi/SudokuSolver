/*
	@Author: Nur-E-Elahi Shonchoy
	VIEW logic for the sudokuSolver puzzlePage
*/

sudokuSolver.view.puzzlePage = {
	
	// This function creates the Sudoku Matrix
	createSudoku: function (){
		console.log("createSudoku Called()");
		var input_tag;
		for (i=0; i<9; i++){
			$("#sudoku_grid").append('<div class="outer_box">');
			for (j=0; j<9; j++){
				input_tag = '<input id="'+i+j+'" type="number" min="1" max="9">';
				//console.log(input_tag);
				$("#sudoku_grid").append(input_tag);
				input_tag = '';
			}
		}
		this.colorSudoku();
	},
	
	// Colors the 3x3 cells based on the starting i,j
	colorSudoku: function(){
		this.applyColor(0,0);
		this.applyColor(0,6);
		this.applyColor(3,3);
		this.applyColor(6,0);
		this.applyColor(6,6);
	},
	
	// Applies the color class the cell
	applyColor: function(start_i, start_j){
		var input_position;
		for (i=start_i; i<start_i+3; i++){
			for (j=start_j; j<start_j+3; j++){
				input_position = '#'+i+j;
				$(input_position).addClass("cube2")
			}
		}
	}
	
};