/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.getElementById("solve_btn").addEventListener("click", input);


var matrix = [
	[0,0,0,   0,0,0,	0,0,0],
	[0,0,0,   0,0,0,	0,0,0],
	[0,0,0,   0,0,0,	0,0,0],
	
	[0,0,0,   0,0,0,	0,0,0],
	[0,0,0,   0,0,0,	0,0,0],
	[0,0,0,   0,0,0,	0,0,0],
	
	[0,0,0,   0,0,0,	0,0,0],
	[0,0,0,   0,0,0,	0,0,0],
	[0,0,0,   0,0,0,	0,0,0],
];


function input(){
	for (var i=0; i<9; i++){
		for (var j=0; j<9; j++){
			var string = '#'+i+j;
			var value = $(string).val();
			if (value){
				if (value >9 || value <1){
					alert ("Invalid Puzzle");
					return false;
				}
				if (value == ""){
					matrix[i][j] = 0;
				}
				else{
					matrix[i][j] = value;
				}

			}
			string = '';
		}
	}
	
	
	process_cell(0,0);
	
	/*
	var out="";
	for(var i = 0; i < 9; i++) {
		for(var z = 0; z < 9; z++) {
			out = out + matrix[i][z];
	 }
	 console.log(out);
	 out="";
	}
	*/
	
	for (var i=0; i<9; i++){
		for (var j=0; j<9; j++){
			var string = '#'+i+j;
			$(string).val(matrix[i][j]);
			string = '';
		}
	}
	
	
	navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
	
	
	
}

function alertDismissed();


function process_cell (i, j){

	if (i==9&&j==0){
		return true;
	}
	
	var ii, jj;
	if (j+1>8){
		ii=i+1;
		jj=0;
	}
	else{
		ii=i;
		jj=j+1;
	}
	

	if (matrix[i][j]!=0){
		if (process_cell(ii,jj)){
			return true;
		}
		return false;
	}
	
	for (var a=1; a<10; a++){
		if (check_valid(i,j,a)){
			matrix[i][j]=a;
			if (process_cell(ii,jj)){
				return true;
			}
			matrix[i][j]=0;
		}
	}
	return false;
}

function check_valid(i,j,a){
	for (var c=0;c<9;c++){
		if (c!=j && matrix[i][c]==a){
			return false;
		}
		if (c!=i && matrix[c][j]==a){
			return false;
		}
	}
	

    var y = Math.floor(i/3)*3;


	var x = Math.floor(j/3)*3;


    for (var p=y; p<y+3; p++){
        for (var q=x; q<x+3; q++){
			
            if ( matrix[p][q] == a )
                return false;
        }
    }

    return true;
}
