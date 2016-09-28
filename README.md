# SudokuSolver

SudokuSolver helps you find solution to any Sudoku puzzle. The user interface takes in input of an unsolved state of a Sudoku puzzle and outputs a valid solution. If an invalid puzzle is entered an error message is returned to the user, the application additionally the user know if the puzzle is unsolvable. This is a hybrid app which is targetted towards iOS but also runs correctly in Android devices with different screen sizes.

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

 1. Sudoku with Full Grid filled up
 2. Sudoku with One cell missing
 3. Sudoku with only 1 possible solution
 4. Typical Sudoku
 5. Unsolvavble Sudoku Puzzle


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
```
cordova build ios
cordova emulate ios
```

This should emulate the application in the simulator. Commands to generate the Android version is given below.

```
cordova platform add android --save
cordova requirements
cordova build android
cordova run android
```


## Source Code

The source code of the application can be found in "SudokuSolver\www" folder.


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
