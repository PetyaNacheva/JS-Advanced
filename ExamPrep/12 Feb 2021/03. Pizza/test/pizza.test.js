const assert = require('chai').assert;
const pizzUni = require("../pizza");

describe('Check the functionality', ()=>{
    describe('test makeAnOrder', ()=>{
        it('test order throw err', ()=>{
            assert.throw(()=>pizzUni.makeAnOrder(""), 'You must order at least 1 Pizza to finish the order.');
        });

        it('test order only pizza', ()=>{
            let pizza = {orderedPizza: "Margerittha"};
            assert.equal("You just ordered Margerittha", pizzUni.makeAnOrder(pizza));
        });
        it('test order only pizza', ()=>{
            let pizza = {orderedPizza: "Margerittha",
            orderedDrink: "Cola"};
            assert.equal("You just ordered Margerittha and Cola.", pizzUni.makeAnOrder(pizza));
        });
    });

    describe('Test getRemainingWork', ()=>{
        it('with pizza ready',()=>{
            let orders = [{pizzaName: 'My', status: 'ready'},{pizzaName: 'Margerittha', status:  'preparing'}];
            assert.equal(`The following pizzas are still preparing: Margerittha.`, pizzUni.getRemainingWork(orders))
        });
        it('with pizza ready',()=>{
            let orders = [{pizzaName: 'My', status: 'ready'},{pizzaName: 'Margerittha', status:  'ready'}];
            assert.equal('All orders are complete!', pizzUni.getRemainingWork(orders))
        });
    });

    describe('Test orderType ', ()=>{
       it('Shoulw test orderType',()=>{
        assert.equal(9, pizzUni.orderType(10,'Carry Out'));
       }); 
       it('Shoulw test orderType',()=>{
        assert.equal(10, pizzUni.orderType(10,'Delivery'));
       }); 
    });
});