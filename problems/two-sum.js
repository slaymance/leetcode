/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const complements = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (complements.has(nums[i])) return [complements.get(nums[i]), i];
    const complement = target - nums[i];
    if (!complements.has(complement)) complements.set(complement, i);
  }

  return [];
};