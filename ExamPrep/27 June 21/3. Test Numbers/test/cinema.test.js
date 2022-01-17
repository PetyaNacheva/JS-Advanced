const cinema=require("../cinema");
const assert= require('chai').assert;

describe('Test functionality',()=>{
    describe('show movies', () => {
        it('should work', () => {
            let movieArr=[];
            movieArr.push('Rambo');
            movieArr.push('Superman');
            assert.equal('Rambo, Superman', cinema.showMovies(movieArr));
            assert.equal('Rambo, Superman, Batman', cinema.showMovies(['Rambo, Superman, Batman']));
            assert.equal('Rambo', cinema.showMovies(['Rambo']));

        });

        it('should work', () => {
           let movieArr=[];
           assert.equal('There are currently no movies to show.', cinema.showMovies(movieArr));
           assert.equal('There are currently no movies to show.', cinema.showMovies(movieArr));
        });

});


    describe('ticket price', () => {
        it('should work', () => {
            assert.equal(12.00, cinema.ticketPrice("Premiere"));
            assert.equal(7.50, cinema.ticketPrice("Normal"));
            assert.equal(5.50, cinema.ticketPrice("Discount"));

        });

        it('should work', () => {
           
           assert.throw(()=>cinema.ticketPrice('notNormal'),'Invalid projection type.')
           assert.throw(()=>cinema.ticketPrice('Any'),'Invalid projection type.')
           assert.throw(()=>cinema.ticketPrice('Some'),'Invalid projection type.')
           assert.throw(()=>cinema.ticketPrice('discount'),'Invalid projection type.')
           assert.throw(()=>cinema.ticketPrice('5'),'Invalid projection type.')
        });

});

describe('swap seats', () => {
    it('should work', () => {
        assert.equal("Successful change of seats in the hall.", cinema.swapSeatsInHall(2,4));
        assert.equal("Successful change of seats in the hall.", cinema.swapSeatsInHall(5,9));
        assert.equal("Successful change of seats in the hall.", cinema.swapSeatsInHall(1,19));
        assert.equal("Successful change of seats in the hall.", cinema.swapSeatsInHall(1,8));
        assert.equal("Successful change of seats in the hall.", cinema.swapSeatsInHall(1,20));
        assert.equal("Successful change of seats in the hall.", cinema.swapSeatsInHall(6,7));

    });

    it('should work', () => {
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(26,21));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(0,21));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(0,6));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(6,0));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(-2,-5));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(-2,16));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(5,99));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(7,-5));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall("a",6));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(8,"b"));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall("b","5"));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall("a","b"));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(5.3,7.5));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(6.2,5));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(8,9.3));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(100,5));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(6,6));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall("3","5"));
        assert.equal("Unsuccessful change of seats in the hall.", cinema.swapSeatsInHall(0,0));
    });

});


});