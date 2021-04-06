/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is palindrome while 123 is not.
*/

// Runtime: 208 ms, faster than 86.10% of JavaScript online submissions for Palindrome Number.
const isPalindrome = function (x) {

    const givenNumber = x
    let remainder = reversed = 0
    while (x > 0) {
        remainder = x % 10
        reversed = (reversed * 10) + remainder
        x = Math.floor(x / 10)
    }

    return reversed === givenNumber
};

console.log(isPalindrome(121))


/*
Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
*/