/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
*/


const s = "abcabcbb" // 3
// const s = "bbbbb" // 1


const lengthOfLongestSubstring = (s) => {

    let set = new Set()
    let left = right = lengthOfSubString = 0
    // a b c a
    while (right < s.length) {
        if (!set.has(s.charAt(right))) {
            set.add(s.charAt(right))
            right++
            lengthOfSubString = Math.max(lengthOfSubString, set.size) // which ever is greater that will be the new length
        } else {
            // meaning we have duplicates
            // remove the left most element to shrink the set starting from left until we dont find duplicates
            set.delete(s.charAt(left))
            left++
            //we dont calculate the length here because else block tries to shrink the list and get rid of duplicates. If we dont have dups then if block is executed
        }
    }
    return lengthOfSubString
}




console.log(lengthOfLongestSubstring(s))



// const m = new Map();
// m.set(0, 'd')
// m.set(1, 'v')
// m.set(2, 'd')

// console.log(m.has('d'))

/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0


Inspiration : https://www.youtube.com/watch?v=WKTgajDkVcA&ab_channel=TerribleWhiteboard
*/