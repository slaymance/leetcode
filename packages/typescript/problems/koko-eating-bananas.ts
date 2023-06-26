function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = piles.reduce((max, pile) => (max > pile ? max : pile), 0);
  let k = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const hoursTaken = piles.reduce(
      (hours, pile) => hours + Math.ceil(pile / mid),
      0
    );

    if (hoursTaken > h) left = mid + 1;
    else {
      k = Math.min(k, mid);
      right = mid - 1;
    }
  }

  return k;
}
