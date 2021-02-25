/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const counts = new Map();

  for (const letter of s) {
    counts.set(letter, ~~counts.get(letter) + 1);
  }

  for (const letter of t) {
    const count = counts.get(letter);
    if (!count) return letter;
    counts.set(letter, ~~count - 1);
  }

  return '';
};