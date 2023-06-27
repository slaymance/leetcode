function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (true) {
    if (nums[left] <= nums[right]) return nums[left];

    const mid = Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) return nums[mid];
    else if (nums[mid] < nums[left]) right = mid - 1;
    else left = mid + 1;
  }
}
