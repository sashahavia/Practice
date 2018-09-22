/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1
 */

class Solution {
  public int getSum(int a, int b) {
    // while (b != 0){
    // int carry = (a & b) ; //CARRY is AND of two bits

    // a = a ^b; //SUM of two bits is A XOR B

    // b = carry << 1; //shifts carry to 1 bit to calculate sum
    // }
    // return a;
    if (a == 0)
      return b;
    if (b == 0)
      return a;

    while (b != 0) {
      int carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }

    return a;
  }
}
