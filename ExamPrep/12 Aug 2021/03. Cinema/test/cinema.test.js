const assert= require("chai").assert;
const cinema = require("../cinema");
const expect = require('chai').expect;
describe('Test functionality',()=>{
    describe('showMovies', () => {
        it('should work', () => {
            let movies = [];
            let expected = "There are currently no movies to show.";
            assert.equal(expected, cinema.showMovies(movies));
           
        });
        it('should work', ()=> {
            let movies = ["Stelt", "Evil"];
            let expected = "Stelt, Evil";
            assert.equal(expected,cinema.showMovies(movies));
        });
        it('should work', ()=> {
            let movies = ["Heaven", "Test", "My"];
            let expected = "Heaven, Test, My";
            assert.equal(expected,cinema.showMovies(movies));
        });
});

describe('ticketPrice', () => {
        it('should work', () => {
        let type = "Premiere";
        let expected = 12.00;
        assert.equal(expected, cinema.ticketPrice(type));
       
    });
    it('should work', () => {
        let type = "Normal";
        let expected = 7.50;
        assert.equal(expected, cinema.ticketPrice(type));
       
    });
    it('should work', () => {
        let type = "Discount";
        let expected = 5.50;
        assert.equal(expected, cinema.ticketPrice(type));
       
    });
    it('should work', ()=> {
        expect(() => cinema.ticketPrice('NotNormal')).to.throw('Invalid projection type.');
        expect(() => cinema.ticketPrice(5)).to.throw('Invalid projection type.');
    });

});

describe('SwapSeats', ()=>{

    it('shoulw swap work',()=>{
        let expected = "Successful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(10,12));
    });

    it('shoulw swap work',()=>{
        let expected = "Successful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(3,9));
    });
    it('shoulw swap work',()=>{
        let expected = "Successful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(1,20));
    });

    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(-10,12));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(10,-12));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall("10",12));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(10,"12"));
    });
  
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(10,10));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(10.5,5.2));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(10,22));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(22,10));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(52,30));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(1.5,12));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(0,0));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(0,5));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(5,0));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(12,1.5));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall("12","10"));
    });

    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall(10,"b"));
    });
    it('shoulw swap work',()=>{
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(expected, cinema.swapSeatsInHall("b",5));
    });

});
});