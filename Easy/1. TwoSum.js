/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/* Solution 1 - Brute force method - Time O(n^2)*/

const array = [2, 7, 11, 15]
var twoSumFirst = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
  return [-1, -1]
}
console.log(twoSumFirst(array, 9)) // prints [0,1]

/* This is not so optimal as the time complexity is o(n^2) */
/* ------------------------------------------------------------------------------ */

/* Solution 2 - Brute force method - Time O(n^2)*/
const twoSumSecond = function (nums, target) {
  const memo = {}
  const len = nums.length
  for (let i = 0; i < len; i++) {
    // if we don't find the element, then add it to memo
    if (!(target - nums[i] in memo)) {
      memo[nums[i]] = i
    } else {
      // we found the element, so we return the indeces
      return [i, memo[target - nums[i]]]
    }
  }
  // we haven't found the combination but traced all the elements
  return [-1, -1]
}
console.log(twoSumSecond(array, 9)) // prints [0,1] // time - o(n)

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/
