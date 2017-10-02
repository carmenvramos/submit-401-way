const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');

describe('math', () => {
    it('adds two numbers', () => {
        assert.equal(add(5,2),7);
    });
    it('subracts two numbers', () => {
        assert.equal(subtract(5,2),3);
    });
    it('multiply two numbers', () => {
        assert.equal(multiply(5,2),10);
    });
    it('divides two numbers', () => {
        assert.equal(divide(10,2),5);
    });
});

