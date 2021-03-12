const canAttackRow = (king, queen) => king[0] === queen[0];
const canAttackCol = (king, queen) => king[1] === queen[1];
const canAttackDiag = (king, queen) => Math.abs(king[0] - queen[0]) === Math.abs(king[1] - queen[1]);
const attackPosition = (king, queen) => {
  if (canAttackRow(king, queen)) return king[1] > queen[1] ? 7 : 3;
  if (canAttackCol(king, queen)) return king[0] > queen[0] ? 1 : 5;
  if (canAttackDiag(king, queen)) {
    if (king[0] > queen[0]) return king[1] > queen[1] ? 0 : 2;
    return king[1] > queen[1] ? 6 : 4;
  }

  return -1;
};

const distance = (king, queen) => Math.abs(king[0] - queen[0]) + Math.abs(king[1] - queen[1]);

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queensAttacktheKing = (queens, king) => {
  return queens.reduce((positions, queen) => {
    const position = attackPosition(king, queen);

    if (!(position in positions) || distance(king, queen) < distance(king, positions[position])) {
      positions[position] = queen;
    }

    return positions;
  }, Array(8)).filter(queen => queen);
};
