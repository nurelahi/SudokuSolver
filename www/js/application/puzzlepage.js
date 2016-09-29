/*
	@Author: Nur-E-Elahi Shonchoy
	Model/Service/Application logic for the sudokuSolver puzzlePage
*/

sudokuSolver.application.puzzlePage = {
	
	// Initailize the global matrix
	matrix : [
		[0,0,0,   0,0,0,	0,0,0],
		[0,0,0,   0,0,0,	0,0,0],
		[0,0,0,   0,0,0,	0,0,0],
		
		[0,0,0,   0,0,0,	0,0,0],
		[0,0,0,   0,0,0,	0,0,0],
		[0,0,0,   0,0,0,	0,0,0],
		
		[0,0,0,   0,0,0,	0,0,0],
		[0,0,0,   0,0,0,	0,0,0],
		[0,0,0,   0,0,0,	0,0,0],
	],
	
	// This service grabs the input from the board and plugs it into matrix
	getInput: function(){
		console.log("getInput() is called");
		for (var i=0; i<9; i++){
			for (var j=0; j<9; j++){
				var locate = '#'+i+j;
				$(locate).removeClass("cell-highlight");
				var value = $(locate).val();
					if (value == ""){
						this.matrix[i][j] = 0;
					}
					else{
						this.matrix[i][j] = value;
						$(locate).addClass("cell-highlight");
					}
				locate = '';
			}
		}
	},
	
	// Clears the current matrix
	clearMatrix: function (){
		console.log("clearMatrix() is called");
		for (var i=0; i<9; i++){
			for (var j=0; j<9; j++){
				var locate = '#'+i+j;
				$(locate).val('');
				$(locate).removeClass("cell-highlight");
				locate = '';
			}
		}
	},
	
	// This service prints the current state of matrix
	printMatrix: function (){
		console.log("printMatrix() is called");
		for (var i=0; i<9; i++){
			for (var j=0; j<9; j++){
				var locate = '#'+i+j;
				$(locate).val(this.matrix[i][j]);
				locate = '';
			}
		}
	},
	
	// Processes each cell one by one till the last cell is filled
	processCell: function (i, j){
		if (i>8){
			return true;
		}
		
		// Find the i,j of the next cell
		var ii, jj;
		if (j+1>8){
			ii=i+1;
			jj=0;
		}
		else{
			ii=i;
			jj=j+1;
		}
		

		if (this.matrix[i][j]!=0){
			if (this.processCell(ii,jj)){
				return true;
			}
			return false;
		}
		
		for (var a=1; a<10; a++){
			if (this.checkValid(i,j,a)){
				this.matrix[i][j]=a;
				if (this.processCell(ii,jj)){
					return true;
				}
				this.matrix[i][j]=0;
			}
		}
		return false;
	},
	
	// This function checks if the value of 'a' is valid in cell i,j
	checkValid: function (i,j,a){
		for (var c=0;c<9;c++){
			if (c!=j && this.matrix[i][c]==a){
				return false;
			}
			if (c!=i && this.matrix[c][j]==a){
				return false;
			}
		}
	
		var y = Math.floor(i/3)*3;
		var x = Math.floor(j/3)*3;

		for (var p=y; p<y+3; p++){
			for (var q=x; q<x+3; q++){
				
				if ( ((p!=i)||(q!=j)) && this.matrix[p][q] == a )
					return false;
			}
		}

		return true;
	},
	
	// This function checks if the input matrix is a valid one
	validateMatrix: function(i, j){
		if (i>8){
			return true;
		}
		
		//console.log(i,j);
		//console.log(this.matrix[i][j]);
		
		// Find the i,j of the next cell
		var ii, jj;
		if (j+1>8){
			ii=i+1;
			jj=0;
		}
		else{
			ii=i;
			jj=j+1;
		}
		
		// If the current cell is '0' just check next cell
		// This is because in initial state the puzzle may have '0's
		if (this.matrix[i][j]==0){
			if(this.validateMatrix(ii,jj)){
				return true;
			}
			else{
				return false;
			}
		}
		
		// If the value in the cell is >9 or <1 its invalid
		if ( (this.matrix[i][j]>9) || (this.matrix[i][j]<1) ){
			return false;
		}
		
		// Check if the value in current cell is valid then
		// Go to next cell or return false to caller
		var k = this.matrix[i][j];
		if (this.checkValid(i,j,k)){
			if (this.validateMatrix(ii,jj)){
				return true;
			}
			else{
				return false;
			}
		}
		else {
			return false;
		}
	}

};




