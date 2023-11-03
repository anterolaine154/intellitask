/**
 * Filename: complexCode.js
 * 
 * Description: This complex code is an implementation of a library for performing advanced
 * mathematical operations and matrix manipulations. It includes functions for matrix addition,
 * subtraction, multiplication, determinant calculation, transpose, and more.
 */

// Define a Matrix class to encapsulate matrix operations
class Matrix {
  constructor(rows, cols, initial = null) {
    this.rows = rows;
    this.cols = cols;
    this.data = initial ? Array.from({ length: rows }, () => Array(cols).fill(initial)) : null;
  }

  setValues(matrix) {
    if (matrix.length === this.rows && matrix[0].length === this.cols) {
      this.data = matrix;
    } else {
      throw new Error('Invalid matrix dimensions!');
    }
  }

  add(matrix) {
    if (matrix.rows === this.rows && matrix.cols === this.cols) {
      const result = new Matrix(this.rows, this.cols);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          result.data[i][j] = this.data[i][j] + matrix.data[i][j];
        }
      }
      return result;
    } else {
      throw new Error('Invalid matrix dimensions!');
    }
  }

  subtract(matrix) {
    if (matrix.rows === this.rows && matrix.cols === this.cols) {
      const result = new Matrix(this.rows, this.cols);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          result.data[i][j] = this.data[i][j] - matrix.data[i][j];
        }
      }
      return result;
    } else {
      throw new Error('Invalid matrix dimensions!');
    }
  }

  multiply(matrix) {
    if (this.cols === matrix.rows) {
      const result = new Matrix(this.rows, matrix.cols);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < matrix.cols; j++) {
          let sum = 0;
          for (let k = 0; k < this.cols; k++) {
            sum += this.data[i][k] * matrix.data[k][j];
          }
          result.data[i][j] = sum;
        }
      }
      return result;
    } else {
      throw new Error('Invalid matrix dimensions!');
    }
  }

  determinant() {
    if (this.rows !== this.cols) {
      throw new Error('Matrix must be square to calculate determinant!');
    }

    if (this.rows === 2 && this.cols === 2) {
      return this.data[0][0] * this.data[1][1] - this.data[0][1] * this.data[1][0];
    }

    let det = 0;
    for (let i = 0; i < this.cols; i++) {
      const minor = this.getMinor(0, i);
      det += (i % 2 === 0 ? 1 : -1) * this.data[0][i] * minor.determinant();
    }
    return det;
  }

  transpose() {
    const result = new Matrix(this.cols, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.data[j][i] = this.data[i][j];
      }
    }
    return result;
  }

  getMinor(row, col) {
    const minor = new Matrix(this.rows - 1, this.cols - 1);
    let minorRow = 0;
    let minorCol = 0;
    for (let i = 0; i < this.rows; i++) {
      if (i !== row) {
        minorCol = 0;
        for (let j = 0; j < this.cols; j++) {
          if (j !== col) {
            minor.data[minorRow][minorCol] = this.data[i][j];
            minorCol++;
          }
        }
        minorRow++;
      }
    }
    return minor;
  }
}

// Usage example

// Create two matrices
const matrix1 = new Matrix(3, 3, 1);
const matrix2 = new Matrix(3, 3, 2);

// Set custom values for matrix1
matrix1.setValues([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log('Matrix 1:');
console.log(matrix1.data);

// Perform matrix addition
const additionResult = matrix1.add(matrix2);
console.log('\nMatrix Addition Result:');
console.log(additionResult.data);

// Perform matrix subtraction
const subtractionResult = matrix1.subtract(matrix2);
console.log('\nMatrix Subtraction Result:');
console.log(subtractionResult.data);

// Perform matrix multiplication
const multiplicationResult = matrix1.multiply(matrix2);
console.log('\nMatrix Multiplication Result:');
console.log(multiplicationResult.data);

// Calculate matrix determinant
const determinantResult = matrix1.determinant();
console.log('\nMatrix Determinant:');
console.log(determinantResult);

// Calculate matrix transpose
const transposeResult = matrix1.transpose();
console.log('\nMatrix Transpose:');
console.log(transposeResult.data);
