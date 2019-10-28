var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  })

  it('can add 1 to 4 and return 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  })

  it('can subtract 4 from 7 and return 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('can multiply 3 by 5 to return 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('can divide 21 by 7 to return 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 25)
  })

  it('can chain multiple operations together, adding 2 to 50 then multiplying by 2 to return 104', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 104);
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(9);
    calculator.operatorClick("*");
    calculator.numberClick(9);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 27);
  })





});
