const assert = require("chai").assert;
const helloWorld = require('../index').helloWorld;
const addNumbers = require('../index').addNumbers;
const multiplyNumbers = require('../index').multiplyNumbers;
describe('App', () => {
  it('Should fix the travis error', () => {
    assert.equal(2, 2);
  });
  it('Should say Hello!', () => {
  	let result = helloWorld();
  	assert.equal(result, 'hello');
  });
  it('Should know to add things up', () => {
  	let result = addNumbers(23,23)
  	assert.isAbove(result, 23)
  });
  it('Should know to mix things up', () => {
  	let result = multiplyNumbers(23,23)
  	assert.isAbove(result, 23)
  });
});
