var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findMedianSortedArrays(nums1, nums2) {
    var merged = __spreadArray(__spreadArray([], nums1, true), nums2, true).sort(function (a, b) { return a - b; });
    var mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
}
// Example usage
var nums1 = [1, 3];
var nums2 = [2];
var median1 = findMedianSortedArrays(nums1, nums2);
console.log(median1); // Output: 2.00000
var nums3 = [1, 2];
var nums4 = [3, 4];
var median2 = findMedianSortedArrays(nums3, nums4);
console.log(median2); // Output: 2.50000
