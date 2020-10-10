
const assert = require('assert');

function capitalizeFirst(input) {
    return (input.length > 0
        ? input.split(' ').map((word) => 
            word.split().map((letter) => 
                letter[0].toUpperCase() + letter.slice(1)
            ).join(' ')
        ).join(' ')
        : ''
    )
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');
// Check that it works for a string of words
assert.strictEqual(capitalizeFirst('I am learning TDD'), 'I Am Learning TDD')