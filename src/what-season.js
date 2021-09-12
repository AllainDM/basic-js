import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let y = date.getMonth()
  if (y === 2 || y === 3 || y === 4) {
    return 'spring';

  } else if (y === 5 || y === 6 || y === 7) {
      return 'summer';

  } else if (y === 8 || y === 9 || y === 10) {
      return 'autumn';    

  } else if (y === 11 || y === 0 || y === 1) {
      return 'winter';

  } 
   else {
    // throw "Invalid date!";
    throw new Error("Invalid date!");
  }

}
