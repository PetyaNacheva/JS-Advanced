const describe = require('mocha').describe;
const assert = require('chai').assert;
function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}



describe('check is odd or even', () => {
    it('Is odd', () => {
        assert.equal(isOddOrEven('a'), 'odd', 'Message a==a');
    });
    it('Type is string', () => {
        assert.isUndefined(isOddOrEven(1), "IT is undefined");
    });


    it('Is even', () => {
        assert.equal(isOddOrEven('aa'), 'even', "message even");
    })

    //Overload test
    it('Number input', () => {
        assert.isUndefined(isOddOrEven(5.55), 'It is undefined!');
    });
})
