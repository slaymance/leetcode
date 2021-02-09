/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  const greatestIndex = candies.reduce((curGreatest, candy, i, src) => candy >= src[curGreatest] ? i : curGreatest, 0);
  return candies.map(candy => candy + extraCandies >= candies[greatestIndex]);
};