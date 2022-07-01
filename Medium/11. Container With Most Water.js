/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// Optimal Approach - O(n)
var maxArea = function (height) {
  let a = 0
  let b = height.length - 1
  let maxArea = 0

  while (a < b) {
    let currentArea = (b - a) * Math.min(height[a], height[b])
    maxArea = Math.max(currentArea, maxArea)
    if (height[a] < height[b]) a++
    else b--
  }
  return maxArea
}

// O(n^2) - Time exceeds on leetcode
var maxAreaBruteForce = function (height) {
  let maxArea = 0
  let len = height.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let currentArea = (j - i) * Math.min(height[i], height[j])
      maxArea = Math.max(maxArea, currentArea)
    }
  }
  return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

/*
Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1
*/
