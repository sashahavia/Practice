// Given a square matrix of size N x N, calculate the absolute difference between the sums of its diagonals.

// Input Format

// The first line contains a single integer, N. The next N lines denote the matrix's rows, with each line containing N space-separated integers describing the columns.

// Constraints

// Output Format

// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15

// Note: |x| is absolute value function

import java.io.*;
import java.util.*;

public class DiagonalDifference {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc=new Scanner(System.in);
        int num = sc.nextInt();
        int sumPrimaryDiagonal = 0;
        int sumSecondaryDiagonal = 0;
        int currInput = 0;
        for (int i= 0; i < num; i++){
            for (int j = 0; j < num; j++) {
                currInput = sc.nextInt();
                if (i == j) {
                    sumPrimaryDiagonal += currInput;
                }
                if (i + j == (num -1)) {
                    sumSecondaryDiagonal += currInput;
                }
            }
        }
        System.out.print(Math.abs(sumPrimaryDiagonal - sumSecondaryDiagonal));
    }
}