// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".
// 

class ReverseString {
    public String reverseString(String s) {
        if(s == null || s.length() <= 1){
            return s;
        }
        char[] chars = s.toCharArray();
        int start = 0, end = chars.length - 1;
        while(start < end){
            char temp = chars[start];
            chars[start] = chars[end];
            chars[end] = temp;
            start++;
            end--;
        }
        return new String(chars);
    }
}