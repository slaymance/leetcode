/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const sLetters = new Map();
  for (const letter of s) {
    sLetters.set(letter, ~~sLetters.get(letter) + 1);
  }

  for (const letter of t) {
    const present = sLetters.get(letter);
    if (!~~present) return letter;
    sLetters.set(letter, ~~present - 1);
  }

  return '';
};