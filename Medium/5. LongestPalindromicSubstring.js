// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

// Brute force method. This takes more time
// const longestPalindrome = function (str) {

//     let longest = str[0];
//     for (let l = 0; l < str.length - 1; l++) {
//         for (let r = l + 1; r < str.length; r++) {
//             let subStr = str.slice(l, r + 1);
//             let revSubStr = subStr.split('').reverse().join('');
//             if (subStr === revSubStr && subStr.length > longest.length) {
//                 longest = subStr;
//             }
//         }
//     }

//     return longest
// };


// Dynamic programming method


const longestPalindrome = function (str) {
    // create a matrix of str length and fill with 0
    // add 1 to all the diagonals representing palindrome of single char
    // above each diagonal, the grid represents two chars,so check if two characters are equal and make it 1
    // finally, on each row, check if left diagonal below that grid is 1, if so, then check if row and col of current grid has same letter, then it's palindrome so add 1 to that. 
    // for more clear explanation refer - https://www.youtube.com/watch?v=EIf9zFqufbU&t=779s


    // Let's code it

    //create and fill matrix with 0
    let matrix = []
    let longestPal = ""
    for (const ch of str) {
        matrix.push(new Array(str.length).fill(0))
    }
    //fill diagonals with 1, coz diagonals represent single chars which are always palindrome
    for (let i = 0; i < str.length; i++) {
        matrix[i][i] = 1
    }

    // fill all the grids above diagonal to 1. Start from col 1, coz col 0 has diagonal and nothing else as we are ignoring the bottom half of matrix as it is the mirror image of top half
    for (let col = 1; col < str.length; col++) {
        for (let row = 0; row < col; row++) {
            if (row === col - 1 && str[row] === str[col]) {
                matrix[row][col] = 1
                if (str.slice(row, col + 1).length > longestPal.length) {
                    longestPal = str.slice(row, col + 1)
                }
            } else if (matrix[row + 1][col - 1] === 1 && str[row] === str[col]) {
                matrix[row][col] = 1
                if (str.slice(row, col + 1).length > longestPal.length) {
                    longestPal = str.slice(row, col + 1)
                }
            }
        }
    }
    return longestPal
}





// const s = "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"
const s = "babad"
console.log(longestPalindrome(s))
