/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/* My Solution 1 - Brute force method - Time O(n^2)*/
const array = [2, 7, 11, 15]
var twoSumFirst = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target)
                return new Array(i, j)
        }
    }
};
console.log(twoSumFirst(array, 9)) // prints [0,1]
// This is not so good solution as the time complexity is o(n^2)
// ------------------------------------------------------------------------------

const twoSumSecond = function (nums, target) {
    const storage = {}
    for (const [index, value] of nums.entries()) {
        if (target - value in storage) {
            return new Array(index, storage[target - value])
        }
        storage[value] = index

    }
}
console.log(twoSumSecond(array, 9)) // prints [0,1] // time - o(n)
//Runtime: 72 ms, faster than 93.61% of JavaScript online submissions for Two Sum.

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




