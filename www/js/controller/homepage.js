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
			console.log("Input Sudoku is invalid");
			navigator.notification.confirm('Your Sudoku input is not valid!', sudokuSolver.controller.homepage.invalidCallback, 'Invalid Puzzle!', ['Clear Board', 'Cancel']);
			 
		}	
	},
	
	invalidCallback: function (choice){
		if (choice == 1){
			sudokuSolver.controller.homepage.clear();
		}
		// else no nothing
	},
	
	generateSolution: function(){
		console.log("generateSolution() is called");
		if (sudokuSolver.application.homepage.processCell(0,0)){
			//Solution Found
			sudokuSolver.application.homepage.printMatrix();
			var notification = 'The puzzle has been successfully solved on your '+device.model+' device running on '+device.platform+' platform!';
			navigator.notification.alert(notification, null, 'Success', 'Awesome!');
		}
		else{
			console.log("Puzzle has no solution");
			navigator.notification.alert('This puzzle has no solution', null, 'Sorry', 'Got it!');
		}
	},
	
	clear: function(){
		console.log("Clear button was pressed");
		sudokuSolver.application.homepage.clearMatrix();
	}
};

sudokuSolver.controller.homepage.initialize();
