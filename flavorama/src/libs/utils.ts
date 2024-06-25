/**
 * getRandomInt
 * Return a random integer form 0 to max;
 * @param {number} max - The Max integer.
 * @returns {number} A number.
 * @example 
 * const data = getRandomInt(2);
 */
export const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

/**
 * getRandomIntBetween
 * Return a random integer form min to max;
 * The maximum is exclusive and the minimum is inclusive
 * @param {number} min - The Min integer.
 * @param {number} max - The Max integer.
 * @returns {number} A number.
 * @example 
 * const data = getRandomIntBetween(2, 4);
 */
export const getRandomIntBetween = (min: number, max: number): number => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
};