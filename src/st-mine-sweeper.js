import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let result = [];
  for (let y = 0; y < matrix.length; y++) {
      result.push([]);
      for (let x = 0; x < matrix[y].length; x++) {
          result[y].push(0);
      }
  }    

  for (let y = 0; y < result.length; y++) {
      for (let x = 0; x < result[y].length; x++) {
          if (matrix[y][x]) {
              if (y === 0) {
                  if (x === 0) {
                      result[y][x + 1] += 1;

                      result[y + 1][x] += 1;
                      result[y + 1][x + 1] += 1;
                  } else if (x === result[y].length - 1) {
                      result[y][x - 1] += 1;

                      result[y + 1][x - 1] += 1;
                      result[y + 1][x] += 1;
                  } else {
                      result[y][x - 1] += 1;
                      result[y][x + 1] += 1;

                      result[y + 1][x - 1] += 1;
                      result[y + 1][x] += 1;
                      result[y + 1][x + 1] += 1; 
                  }
              } else if (y === result[y].length - 1) {
                  if (x === 0) {
                      result[y][x + 1] += 1;

                      result[y - 1][x] += 1;
                      result[y - 1][x + 1] += 1;
                  } else if (x === result[y].length - 1) {
                      result[y][x - 1] += 1;

                      result[y - 1][x - 1] += 1;
                      result[y - 1][x] += 1;
                  } else {
                      result[y][x - 1] += 1;
                      result[y][x + 1] += 1;

                      result[y - 1][x - 1] += 1;
                      result[y - 1][x] += 1;
                      result[y - 1][x + 1] += 1; 
                  }
              } else {
                  if (x === 0) {
                      result[y][x + 1] += 1;

                      result[y - 1][x] += 1;
                      result[y - 1][x + 1] += 1;

                      result[y + 1][x] += 1;
                      result[y + 1][x + 1] += 1;
                  } else if (x === result[y].length - 1) {
                      result[y][x - 1] += 1;

                      result[y - 1][x - 1] += 1;
                      result[y - 1][x] += 1;

                      result[y + 1][x] += 1;
                      result[y + 1][x - 1] += 1;
                  } else {
                      result[y - 1][x - 1] += 1;
                      result[y - 1][x] += 1;
                      result[y - 1][x + 1] += 1;

                      result[y][x - 1] += 1;
                      result[y][x + 1] += 1;

                      result[y + 1][x - 1] += 1;
                      result[y + 1][x] += 1;
                      result[y + 1][x + 1] += 1; 
                  }
              }           
          }
      }
  }
  return result;
}

