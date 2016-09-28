lol();
sudokuSolver.view.homepage();


sudokuSolver.application.homepage = ({
	
	test:true,
	constructor: function(){
		this.views = {
			homepageView: new sudokuSolver.view.homepage({
				
			})
		},
		this.controllers = {
			homepageController: new sudokuSolver.controller.homepage({
				views: this.views
			})
		},
		homepageController
	},
	
	CLASS_NAME: 'sudokuSolver.application.homepage'
});