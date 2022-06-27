/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/


var isValid = function (s) {
    const stack = []; // {([])}
    let recent = ''
    for (const char of s) {
        if (char !== "{" && char !== "}" && char !== "(" && char !== ")" && char !== "[" && char !== "]") {
            continue
        }
        if (char === "{" || char === "(" || char === "[") { // open
            recent = char
            stack.push(recent)
            continue
        }
        if ((char === ')' && recent !== "(") ||
            (char === ']' && recent !== "[") ||
            (char === '}' && recent !== "{")) { // close
            return false
        } else {
            stack.pop()
            recent = stack[stack.length - 1]
        }
    }
    return stack.length === 0
};

// (  

const s = "([])"

console.log(isValid(s))


/*
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
*/
// { 