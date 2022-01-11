const christmas = require("../ChristmasMoviesResources")
const assert = require('chai').assert;

describe('Functionality', ()=>{
    describe('buy Movie', ()=>{
        assert.equal(christmas.movieCollection.length, 2)
       christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
       christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);

    assert.equal(movieCollection.length, 2)
    })
})