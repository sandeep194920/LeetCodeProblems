/* Given a signed 32-bit integer x, return x with its digits reversed. 
   If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

var reverse = function (x) {
    if (x < 0) return -1 * reverse(-x)
    let remainder = reversed = 0
    let negative = false
    if (x < 0) {
        negative = true
    }

    while (x > 0) {
        remainder = x % 10
        reversed = (reversed * 10) + remainder
        x = Math.floor(x / 10)
    }
    if (reversed > (2 ** 31 - 1)) return 0
    console.log("The neg is ", negative)
    return negative ? -1 * reversed : reversed

};
console.log(reverse(91))


/*

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0

*/