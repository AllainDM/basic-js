import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let separ;
  let repTimes;
  let addit;
  let additSepar;
  let additRepeat;
  if (options.hasOwnProperty('repeatTimes') == false) {
      repTimes = 1
  } else {
      repTimes = options.repeatTimes
  }

  if (options.hasOwnProperty('separator') == false) {
      separ = '+'
  } else {
      separ = options.separator
  }

  if (options.hasOwnProperty('addition') == false) {
      addit = ''
  } else {
      addit = options.addition
  }

  if (options.hasOwnProperty('additionSeparator') == false) {
      additSepar = '|'
  } else {
      additSepar = options.additionSeparator
  }

  if (options.hasOwnProperty('additionRepeatTimes') == false) {
      additRepeat = '1'
  } else {
      additRepeat = options.additionRepeatTimes
  }
  
  let result = '';
  for (let x = 1; x <= repTimes; x++) {
      
      if (x < repTimes) {
          result += str;

          for (let x = 1; x <= additRepeat; x++) {
              if (x < additRepeat) {
                  result += addit;
                  result += additSepar;
              } else {
                  result += addit;
              }
              
          }

          result += separ;

      } else {                
          result += str;
          for (let x = 1; x < additRepeat; x++) {
              result += addit;
              result += additSepar;
          }
      }
      
  }
  result += addit;


  return result;

}

// export default function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
