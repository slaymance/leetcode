function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < nums[left]) {
      if (nums[mid] > target || nums[right] < target) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target || nums[left] > target) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
}

console.log(`Expected: 4, Actual: ${search([4, 5, 6, 7, 0, 1, 2, 3], 0)}`);
console.log(`Expected: 2, Actual: ${search([6, 7, 0, 1, 2, 3, 4, 5], 0)}`);
console.log(`Expected: 0, Actual: ${search([0, 1, 2, 3, 4, 5, 6, 7], 0)}`);
