import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
      if ( arr[x] == '--discard-next') {
          x += 2;
      } else if ( arr[x] == '--discard-prev') {
          newArr.splice(x - 1, 1)
      } else if ( arr[x] == '--double-next') {
          newArr.push(arr[x + 1])
      } else if ( arr[x] == '--double-prev') {
          newArr.push(arr[x - 1])
      } else {
          newArr.push(arr[x]);
      }
  }
  return newArr;

}

// export default function transform(/* arr */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
