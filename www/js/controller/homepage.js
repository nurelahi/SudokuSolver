/*
	@Author: Nur-E-Elahi Shonchoy
	CONTROLLER Logic for sudokuSolver homepage
*/

sudokuSolver.controller.homepage = {
	
	initialize: function(){
		console.log("Controller Init");
		sudokuSolver.view.homepage.createSudoku();
		$('#solve_btn').click(this.solve);
		$('#clear_btn').click(this.clear);
	},
	
	solve: function(){
		console.log("Solve() Called");
		// Call getInput service
		sudokuSolver.application.homepage.getInput();
		
		if (sudokuSolver.application.homepage.validateMatrix(0,0)){
			// If input matrix is valid
			sudokuSolver.controller.homepage.generateSolution();
		}
		else{
			console.log("Invalid");
		}	
	},
	
	generateSolution: function(){
		console.log("generateSolution() is called");
		if (sudokuSolver.application.homepage.processCell(0,0)){
			//Solution Found
			sudokuSolver.application.homepage.printMatrix();
		}
		else{
			//Solution is not found, return unsolvable Puzzle
		}
	},
	
	clear: function(){
		console.log("Clear button was pressed");
		sudokuSolver.application.homepage.clearMatrix();
	}
};

sudokuSolver.controller.homepage.initialize();
