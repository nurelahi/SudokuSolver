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
			var invalidinput = 'Your input puzzle does not follow the rules of Sudoku! Please enter a valid Sudoku puzzle and try again';
			navigator.notification.confirm(invalidinput, sudokuSolver.controller.homepage.invalidCallback, 'Invalid Puzzle!', ['Clear Board', 'OK']);
			navigator.vibrate(800);
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
			navigator.vibrate(800);	// Device vibrates on successful solution
		}
		else{
			console.log("Puzzle has no solution");
			navigator.notification.alert('This puzzle has no solution', null, 'Sorry', 'Got it!');
			navigator.vibrate(800);
		}
	},
	
	clear: function(){
		console.log("Clear button was pressed");
		sudokuSolver.application.homepage.clearMatrix();
	}
};

sudokuSolver.controller.homepage.initialize();
