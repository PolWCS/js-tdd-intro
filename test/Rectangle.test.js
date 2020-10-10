const { strict } = require('assert');
const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
    it('is a function accepting two arguments', () => {
        assert.strictEqual(typeof Rectangle, 'function');
        assert.strictEqual(Rectangle.length, 2);
    });
    it('checks if it is square', () => {
        assert.strictEqual(new Rectangle(1, 1).isSquare(), true);
        assert.strictEqual(new Rectangle(1, 2).isSquare(), false);
    });
    it('computes area correctly', () => {
        assert.strictEqual(new Rectangle(7, 6).getArea(), 42);
    });
    it('computes perimeter correctly', () => {
        assert.strictEqual(new Rectangle(8, 4).getPerimeter(), 24);
    });
})