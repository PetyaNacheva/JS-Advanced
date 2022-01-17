

const testNumbers = require("../testNumbers");
const assert = require("chai").assert;
const expect = require("chai").expect;

describe('Test functionality',()=>{
    describe('sum', () => {
        it('should work', () => {
            assert.equal(10, testNumbers.sumNumbers(5,5));
            assert.equal(2.44, testNumbers.sumNumbers(1.22,1.223));
            assert.equal(5, testNumbers.sumNumbers(15,-10));
            assert.equal(-25, testNumbers.sumNumbers(-15,-10));
            assert.equal(0, testNumbers.sumNumbers(0,0));
        });

        it('should work', () => {
            assert.isUndefined(testNumbers.sumNumbers("10",5));
            assert.isUndefined(testNumbers.sumNumbers(5,"5"));
            assert.isUndefined(testNumbers.sumNumbers("str",5));
            assert.isUndefined(testNumbers.sumNumbers(" ",5));
            assert.isUndefined(testNumbers.sumNumbers(null,5));
            assert.isUndefined(testNumbers.sumNumbers(undefined,5));
        });

});
describe('number checker', () => {
    it('should throw an error for invalid input', () => {
        expect(() => testNumbers.numberChecker('asd')).to.throw(Error, 'The input is not a number!');
        expect(() => testNumbers.numberChecker('a')).to.throw(Error, 'The input is not a number!');
    });

    it('should work', ()=>{
        let input = 10;
        assert.equal('The number is even!', testNumbers.numberChecker(input));
    });
    it('should work', ()=>{
        let input = 5;
        assert.equal('The number is odd!', testNumbers.numberChecker(input));
    });

});

describe('averageSumArray', () => {
    
    it('should work', () => {
        let arr = [1,2,3,4,5]
        assert.equal(3, testNumbers.averageSumArray(arr));
    });
    it('should work', () => {
        let arr = [1, 2, 1.5]
        assert.equal(1.5, testNumbers.averageSumArray(arr));
    });

 it('should work', () => {
        let arr = [0, 0,0]
        assert.equal(0, testNumbers.averageSumArray(arr));
    });
    it('should work', () => {
        let arr = [-3,-5,-2]
        assert.equal(-3.3333333333333335, testNumbers.averageSumArray(arr));
    });
}); 



});