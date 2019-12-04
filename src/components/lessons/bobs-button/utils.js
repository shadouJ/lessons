/**
 * Generate an integer randomly between min(inclusive) and max(inclusive)
 * @param {Number} min
 * @param {Number} max
 * @return {Number} A random number
 */
export const pickNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
