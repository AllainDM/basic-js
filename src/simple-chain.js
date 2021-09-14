import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {

    return this;
},
addLink(value) {
    if (typeof arr1 === 'undefined') {
        arr1 = [];
    };
    arr1.push(`( ${value} )`);
    return this;
},
removeLink(position) {
    arr1.splice(position - 1, 1)
    return this;
},
reverseChain() {
    if (typeof arr1 === 'undefined') {
      arr1 = [];
    };
    arr1.reverse();
    return this;
},
finishChain() {
    for (let x = 0; x < arr1.length - 1; x++) {
        if (typeof result === 'undefined') {
            result = '';
        };
        result += arr1[x] + '~~';
    }
    result += arr1[arr1.length - 1];
    newResult = result;
    result = '';
    // console.log(arr);
    // console.log(newResult);
    arr1 = [];
    return this;
}
};

// export default {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };
