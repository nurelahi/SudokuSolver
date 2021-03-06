/*
    @Author: Nur-E-Elahi Shonchoy
    This program solves takes input from test_case_input.txt
    plugs them into the solver program and generates solutions
    and outputs to test_case_output.txt
*/

#include <iostream>
#include <fstream>
using namespace std;


int mat[9][9] = {0};

bool process_cell (int i, int j);
bool check_valid (int i, int j, int val);
bool validator(int i, int j);

int main()
{
    // Please enter your input in the file -> test_case_input.txt
    ifstream in_file ("test_case_input.txt");
    ofstream out_file ("test_case_output.txt");
    char in;
    int in_num;
    while (!in_file.eof())
    {
        in_file >> in;
        if (in=='*')
        {
            out_file<<"*";
            for (int i=0; i<9; i++){
                for (int j=0; j<9; j++){
                    in_file >> in;
                    in_num = in - '0';
                    mat[i][j] = in_num;
                }
            }
            if(process_cell (0,0)){
                // Check if the solution is valid or not
                if (validator(0,0)){
                    cout <<"The Solution PASSED validation"<<endl;
                    out_file <<"The Solution PASSED validation"<<endl;
                }
                else {
                    cout <<"The Solution FAILED validation"<<endl;
                    out_file <<"The Solution FAILED validation"<<endl;
                }
                // Print/Write the solution regarless if its valid or not
                for (int i=0; i<9; i++){
                    for (int j=0; j<9; j++){
                        cout<<mat[i][j];
                        out_file << mat[i][j];
                    }
                    cout<<endl;
                    out_file << endl;
                }

            }
            else{
                // If the process function returns false none of the recursion worked out
                cout <<"Unsolvable Puzzle"<<endl;
                out_file <<"Unsolvable Puzzle"<<endl;
            }
        }
        cout << endl;
    }

    // Closing the file input and output
    in_file.close();
    out_file.close();

    return 0;
}

// Find next value of i
int nexti(int i, int j){
    if (j + 1 > 8){
        return i+1;
    }
    return i;
}

// Find next value of k
int nextj(int i, int j){
    if (j + 1 > 8){
        return 0;
    }
    return j+1;
}

// Recursive funtion processes cell and calls next cell recursively
bool process_cell(int i, int j){
    // Exit condition of recursion, cursor outside cell window.
    if (i>8){
        return true;
    }

    int ii = nexti (i,j);
    int jj = nextj (i,j);

    if (mat[i][j]!=0){
        if (process_cell(ii, jj)){
            // Next cell returned true, return same to caller
            return true;
        }
        else{
            // Next cell returned false, return false to caller
            return false;
        }
    }

    for (int a=1; a<=9; a++){
        if (check_valid(i,j,a)){
            mat[i][j]=a;
            if (process_cell(ii,jj)){
                return true;
            }
            mat[i][j]=0;    //This declaration skips if next process is true
        }

    }
    return false;

}


bool check_valid (int i, int j, int val){
    for (int a=0; a<9; a++){
        if (a!=j && mat[i][a]==val){
            return false;
        }

        if (a!=i && mat[a][j]==val){
            return false;
        }
    }

    int x = j/3;
    x = x*3;

    int y = i/3;
    y = y*3;

    for (int p=y; p<y+3; p++){
        for (int q=x; q<x+3; q++){
            if ( (p!=i || q!=j) && mat[p][q] == val)
                return false;
        }
    }

    return true;

}

// This function can be used to validate the input state as well as solution
bool validator (int i, int j){
    // The recursion is stopped when exit condition is met i more than 8
    if (i>8){
        return true;
    }
    int ii = nexti(i,j);
    int jj = nextj(i,j);

    // This logic is added so that the validator function can be used
    // to validate the input state as well where some inputs are blank/0
    if ( mat[i][j]==0 ){
        if (validator(ii,jj)){
            return true;
        }
        else{
            return false;
        }
    }

    // If the input state is outside 1-9 the puzzle is not valid
    if ( mat[i][j] > 9 || mat[i][j] < 1 ){
        return false;
    }
    int k = mat[i][j];
    if ( check_valid(i,j,k) ){
        // If the value is valid in the cell check if next cell is valid
        if (validator(ii,jj)){
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


