/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

var searchInsert = function (nums, target) {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (target === nums[mid]) return mid
    else if (target > nums[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return low
}

console.log(searchInsert([1, 3, 5, 6], 7))
/*
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/
