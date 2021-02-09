const isOdd = num => num & 1;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = nums => nums.flatMap((num, i, src) =>
  !isOdd(i) ? Array(num).fill(src[i + 1]) : []);