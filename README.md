# SudokuSolver

SudokuSolver helps you find solution to any Sudoku puzzle. The user interface takes in input of an unsolved state of a Sudoku puzzle and outputs a valid solution. If an invalid puzzle is entered an error message is returned to the user, the application additionally the user know if the puzzle is unsolvable. This is a hybrid app which is targetted towards iOS but also runs correctly in Android devices. SudokuSolver is fully responsive and runs in any and all screen sizes.

This application was developed using HTML, CSS, JS leveraging jQuery library and Bootstrap UI Framework which is wrapped on top with a native container using Apache Cordova. The application also demonstrates the use of device specific API such as Vibration and System Dialog.

## Algorithm

The underlying algorithm used to solve the puzzle has been initially developed and tested in C++. The source code is available with application in the following directory along with the test files.

[Sudoku_Solver_Algorithm](https://github.com/nurelahi/SudokuSolver/tree/master/Sudoku_Solver_Algorithm) 

Only contains the Algorithm, **for testing plug in values in the matrix** inside the CPP file. This algorithm can quickly solve any given Sudoku Puzzle, it can also tell if the puzzle is actually unsolvable.

[Sudoku_Solver_Test](https://github.com/nurelahi/SudokuSolver/tree/master/Sudoku_Solver_Test) 

Contains test cases, program executes the test cases and writes the solution to an output file. It additionally indicates if the output solution is valid (Passed), invalid (Fail) or if an unsolvable puzzle was used as in input. **For testing open 'test_case_input.txt' and plug in your values.**

```
Install CodeBlocks
Open the '.cbp' files in CodeBlocks as a Project.
Alternatively run 'main.cpp' in any C++ compiler to test the code.
```
The following testcases are available in the package, feel free to add more!

 1. Sudoku with full grid filled up
 2. Sudoku with one cell missing
 3. Sudoku with only 1 possible solution
 4. Typical sudoku puzzle
 5. Unsolvavble sudoku puzzle

## Implementation

The algorithm was tested in C++ before being implemented on the project, the application itself is written in Javascript. The logic is modular and separated into 'Application', 'View' and 'Controller' using object literals. Bootstrap UI Framework and jQuery is used in the project along with CSS3 for beautification. Media Queriesis  implemeted in the CSS to create responsive design for all screen sizes. The Basic layout of the project is as follows.

#### View

 - Creates Sudoku Grid Dynamically (9x9)
 - Colors 3x3 matrix within the grid

#### Controller

 - Initializes the Grid
 - Controls workflow
 - Invokes appropriate service/application logic incase of errors
 
#### Application/Model
 - Manipulates Global Matrix
 - Implements solver algorithm
 - Clear matrix function
 - Check validity of input matrix

## Device API Usage

 - Dialog box - All notification was shown using system dialog box API.
 - Device Vibration - The device vibrates for 0.8s and provides haptic feedback when the puzzle is solved.
 - Device Information - The name of the device (LG, Ipad etc) the user is using and the platform (iOS, Android etc) is shown to the user on the message which is returned when puzzle is solved.

## Getting Started

The follow is a guide to quickly setup the development environment necessary to run or test the application.

### Prerequisities

What things you need to install the software and how to install them

```
NodeJS
Apache Cordova
Xcode
Android Studio *(Optional)*
```

### Installation

Install NodeJS on your system from the  [NodeJS](http://www.nodejs.com) website. Once it is installed, open the NodeJS CLI and change to your desired directory, afterwards run the following commands.


```
sudo npm install -g cordova
git clone https://github.com/nurelahi/SudokuSolver.git
cd SudokuSolver
cordova platform add ios --save
cordova requirements

```
Once the requirements command is runs, it should give a list of dependencies which is required to build the project on the selected platform. Make sure all the dependencies are installed in the system *(such as Xcode, Android SDK etc)* before proceeding.
### Simulation / Testing on Device
This should emulate the application in the simulator, in order to run on an device make sure the target is connected before running the commands .
```
cordova build ios
cordova emulate ios
```

Commands to deploy application in Android AVD or device is given below.

```
cordova platform add android --save
cordova requirements
cordova build android
cordova run android
```

## User Workflow / Features

 - User enters valid sudoku puzzle
	 - Solve button fills the grid with valid solution
	 - Original inputs are show in Red rest are Black
	 - Application returns error if the input matrix is invalid
	 - Clear button clears the matrixS
 - User enters invalid sudoku puzzle
	 - Pressing solve button opens a dialog with notifies user that the input was invalid.
	 - Only user entered cells are red
	 - Dialog box has 2 option, clear matrix or press ok to exit dialog.
 - User enters unsolvable sudoku puzzle
	 - User gets a dialogue box stating that the puzzle is unsolvable, user can hit 'Got it' to go back to the previous view.

## Source Code

The source code of the application can be found in [SudokuSolver\www](https://github.com/nurelahi/SudokuSolver/tree/master/www) folder.
You can use [WebStorm IDE](https://www.jetbrains.com/webstorm/) to open the project or any other JS IDE/Notepad to access the sourcecode.

## Screenshots
Screenshots taken showing responsiveness across cross platform devices of various screensizes.

[iPhone 6](https://github.com/nurelahi/SudokuSolver/blob/master/screenshots/iPhone%206.png)

[iPhone 7 Plus](https://github.com/nurelahi/SudokuSolver/blob/master/screenshots/iPhone%206.png)

[iPad Mini](https://github.com/nurelahi/SudokuSolver/blob/master/screenshots/iPad%20Mini.PNG)

[iPad Pro - 12inch](https://github.com/nurelahi/SudokuSolver/blob/master/screenshots/iPad%20Pro.png)

[Android - Nexus5](https://github.com/nurelahi/SudokuSolver/blob/master/screenshots/Anroid.PNG)


## Built With

* HTML5
* CSS3
* Javascript
* jQuery - JS library
* Bootstrap - Front End UI Framework
* Apache Cordova
* C++

## Author

**Nur-E-Elahi Shonchoy** - Developer

