// similar to 5_LongestPalindromicSubstring.js

const countSubstrings = function (s) {
    const matrix = [];
    let totalPals = 0;
    let pals = []
    for (const ch of s) {
        matrix.push(new Array(s.length).fill(0))
    }

    for (let diag = 0; diag < s.length; diag++) {
        matrix[diag][diag] = 1
        pals.push(s.slice(diag, diag + 1))
        totalPals++
    }

    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            if ((row === col - 1 && s[row] === s[col]) ||
                (matrix[row + 1][col - 1] === 1 && s[row] === s[col])) {
                matrix[row][col] = 1
                pals.push(s.slice(row, col + 1))
                totalPals++
            }
        }
    }
    console.log(pals)
    return totalPals;
};

s = "aaa"

const pals = countSubstrings(s)
console.log(pals)
//     0 1 2
//     a a a 
//0 a  1 
//1 a  X 1
//2 a  X X 1
