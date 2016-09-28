
sudokuSolver.controller.homepage = {
	
	initialize: function(){
		console.log("Controller Init");
		sudokuSolver.view.homepage.createSudoku();
		$('#solve_btn').click(this.solve);
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
	}
};

sudokuSolver.controller.homepage.initialize();
