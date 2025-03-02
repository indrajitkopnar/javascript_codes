// //tsc leetcode1.ts
// function twoSum(nums: number[], target: number): number[] {
//     const numMap: Map<number, number> = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
//       if (numMap.has(complement)) {
//         return [numMap.get(complement)!, i];
//       }
//       numMap.set(nums[i], i);
//     }
//     throw new Error("No two numbers add up to the target.");
//   }
//   // Example usage
//   const nums = [2, 7, 11, 15];
//   const target = 9;
//   const indices = twoSum(nums, target);
//   console.log(indices); // Output: [0, 1]
var nums = [2, 7, 11, 15];
var target = 9;
var found = false;
var indices = [];
for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            indices = [i, j];
            found = true;
            break;
        }
    }
    if (found) {
        break;
    }
}
if (found) {
    console.log("Indices of elements that add up to the target:", indices);
}
else {
    console.log("Elements not found that add up to the target.");
}