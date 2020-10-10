const { AssertionError } = require('assert');
const assert = require('assert');
const { isMainThread } = require('worker_threads');
const capitalizeFirst = require('../capitalizeFirstLetters');

describe('capitalizeFirst', () => {
    it ('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirst, 'function');
        assert.strictEqual(capitalizeFirst.length, 1);
    })

    it ('transforms javaScript correctly', () => {
        assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
    })

    it ('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirst('z'), 'Z');
    })

    it ('works with a empty string', () => {
    assert.strictEqual(capitalizeFirst(''), '');
    });

    it ('works for multiple words', () => {
        assert.strictEqual(capitalizeFirst('I am learning TDD'), 'I Am Learning TDD')
    });
})