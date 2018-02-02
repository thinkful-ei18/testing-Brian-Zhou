'use strict';

const expect = require('chai').expect; 

const fizzBuzzResult = require('../fizzBuzzer');

describe('fizzBuzzResult', function(){
  it('Any number that is a multiple of 15 should be divisible by 15', function(){
    const numbers = [15, 30, 45, 60, 75];
    numbers.forEach(number => {
      const answer = fizzBuzzResult(number);
      expect(answer).to.equal('fizz-buzz');
    });
  });
  it('Any number that is a multiple of 5, but not 15, should be divisible by 5', function() {
    const numbers =[5, 10, 20, 25];
    numbers.forEach(number => {
      const answer = fizzBuzzResult(number);
      expect(answer).to.equal('buzz');
    });
  });
  it('Any number that is a multiple of 3, but not 5 or 15, should be divisible by 3', function() {
    const numbers = [3, 6, 9, 12, 33];
    numbers.forEach(number => {
      const answer = fizzBuzzResult(number);
      expect(answer).to.equal('fizz');
    });
  });
  it('Any other number should return the number', function() {
    const numbers = [4, 16, 44];
    numbers.forEach(number => {
      const answer = fizzBuzzResult(number);
      expect(answer).to.be.a('number');
    });
  });
  it('Any NaN should return the error', function() {
    const notNumbers = ['this', 'that'];
    notNumbers.forEach(notNumber => {
      expect(fizzBuzzResult(notNumber)).to.throw();
    });
  });
});


// module.exports = function (num) {
//   if (typeof num !== 'number') {
//     throw Error('`num` must be a number');
//   }
//   if (num % 15 === 0) {
//     return 'fizz-buzz';
//   }
//   if (num % 5 === 0) {
//     return 'buzz';
//   }
//   if (num % 3 === 0) {
//     return 'fizz';
//   }
//   else {
//     return num;
//   }
// };