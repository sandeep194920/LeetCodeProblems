/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
*/

// NOTE: Here, I'm implementing the API part as well which is the hidden number and it won't be same always. So, don't expect the same test cases as is the LeetCode.

const n = 1

// API Code
let rand = Math.floor(Math.random() * n)
if (n === 1) rand = 1

const guess = (num) => {
  if (num > rand) return -1
  else if (num < rand) return 1
  else return 0
}

// Actual Code
var guessNumber = function (n) {
  let low = 1
  let high = n

  while (low <= high) {
    let mid = Math.floor((high + low) / 2)
    if (guess(mid) === 1) low = mid + 1
    else if (guess(mid) === -1) high = mid - 1
    else return mid
  }
}

console.log(guessNumber(n))

/*
Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Example 3:
Input: n = 2, pick = 1
Output: 1
*/
