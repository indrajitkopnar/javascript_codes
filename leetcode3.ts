function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
  }
  
  // Example usage
  const nums1 = [1, 3];
  const nums2 = [2];
  const median1 = findMedianSortedArrays(nums1, nums2);
  console.log(median1); // Output: 2.00000
  
  const nums3 = [1, 2];
  const nums4 = [3, 4];
  const median2 = findMedianSortedArrays(nums3, nums4);
  console.log(median2); // Output: 2.50000
  
