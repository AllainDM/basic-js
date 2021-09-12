import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members) == false) {
    return false;
  }

  let arr = [];
  members.forEach(e => {
      if (typeof e === "string") {
          arr.push(e);
      }
  });
  let array = [];
  for (let x = 0; x < arr.length; x++) {
      array.push(arr[x].split(' ').join('').toUpperCase());
  };  
  array.sort();    
  let result = '';
  array.forEach(e => {
      result += e[0];
  })
  const answer = [];
  answer.push(result);
  return answer;
}
