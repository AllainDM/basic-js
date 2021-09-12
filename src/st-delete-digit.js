import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let num;
  let numArr = ('' + n).split('');
  for (let x = 0; x <= 9; x++) {
      for (let y = 0; y < numArr.length; y++) {
          if (numArr[y] == x) {
              numArr.splice(y, 1)
              num = Number(numArr.join(''));
              return num;
          }
      }      
  }
}
