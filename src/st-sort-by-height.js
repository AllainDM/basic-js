import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let newArr = [];
  arr.forEach(e => {
      if (e > 0) {
          newArr.push(e);
      }
      
  });
  newArr.sort(function(a, b) {
    return a - b;
  }); 
  let result = [];
  arr.forEach((e, i) => {
      if (e > 0) {
          result[i] = newArr[0];
          newArr.splice(0, 1);
      } else {
          result[i] = arr[i];
      }
      
  });
  return result;
}



// export default function sortByHeight(/* arr */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
