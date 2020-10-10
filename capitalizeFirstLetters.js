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

module.exports = capitalizeFirst