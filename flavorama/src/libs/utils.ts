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

/**
 * dateParsed
 * Return a parsed now date;
 * @returns {string} A string date.
 * @example 
 * const data = dateParsed();
 */
export const dateParsed = (): string => {
  const date = new Date;

  // Function to pad single digit numbers with a leading zero
  const pad = (number: number) => (number < 10 ? '0' : '') + number;

  // Extract the individual components of the date
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1); // Months are zero-indexed
  const day = pad(date.getUTCDate());
  const hours = pad(date.getUTCHours());
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());
  const milliseconds = pad(date.getUTCMilliseconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
};

