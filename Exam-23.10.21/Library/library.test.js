const library=require("../library");
const assert= require('chai').assert;

describe('Test functionality',()=>{
    describe('calc price book', () => {
        it('should work', () => {
           
            assert.equal('Price of MyBook is 20.00', library.calcPriceOfBook('MyBook',1990));
            assert.equal('Price of SomeBook is 20.00', library.calcPriceOfBook('SomeBook',2000));
        });

        it('should work', () => {
            assert.equal('Price of SomeBook is 10.00', library.calcPriceOfBook('SomeBook',1980));
            assert.equal('Price of SomeBook is 10.00', library.calcPriceOfBook('SomeBook',1979));
            assert.equal('Price of SomeBook is 10.00', library.calcPriceOfBook('SomeBook',1950));

        });

        it('should work', () => {
            assert.throw(()=>library.calcPriceOfBook(5,20.10),"Invalid input")
            assert.throw(()=>library.calcPriceOfBook("5",20.10),"Invalid input")
            assert.throw(()=>library.calcPriceOfBook(5,1980),"Invalid input")
            assert.throw(()=>library.calcPriceOfBook(5,2000),"Invalid input")
            assert.throw(()=>library.calcPriceOfBook(5.5,1979),"Invalid input")
            assert.throw(()=>library.calcPriceOfBook("Mybook","1990"),"Invalid input")
            assert.throw(()=>library.calcPriceOfBook("Mybook","110.20"),"Invalid input")
            assert.throw(()=>library.calcPriceOfBook(undefined,undefined),"Invalid input")

        });
        

        describe('findBook', () => {
           
            it('should work', () => {
                let arr=['MyBook', 'SomeBook', 'Any']
                assert.equal("We found the book you want.", library.findBook(arr,'MyBook'));
                assert.equal("We found the book you want.", library.findBook(arr,'Any'));
                assert.equal("We found the book you want.", library.findBook(arr,'SomeBook'));
            });
    
            it('should work', () => {
                let arr=['MyBook', 'SomeBook', 'Any']
                assert.equal("The book you are looking for is not here!", library.findBook(arr,'Home'));
                assert.equal("The book you are looking for is not here!", library.findBook(arr,'Space'));
                assert.equal("The book you are looking for is not here!", library.findBook(arr,'Alignment'));
    
            });
    
            it('should work', () => {
                assert.throw(()=>library.findBook([],'Book'),"No books currently available")
            });
});

describe('arrange the books', () => {
           
    it('available', () => {
        
        assert.equal("Great job, the books are arranged.", library.arrangeTheBooks(8));
        assert.equal("Great job, the books are arranged.", library.arrangeTheBooks(40));
        assert.equal("Great job, the books are arranged.", library.arrangeTheBooks(1));
        assert.equal("Great job, the books are arranged.", library.arrangeTheBooks(20));
        assert.equal("Great job, the books are arranged.", library.arrangeTheBooks(0));
    });

    it('should work', () => {
        assert.equal("Insufficient space, more shelves need to be purchased.", library.arrangeTheBooks(41));
        assert.equal("Insufficient space, more shelves need to be purchased.", library.arrangeTheBooks(100));
        assert.equal("Insufficient space, more shelves need to be purchased.", library.arrangeTheBooks(51));

    });

    it('should work', () => {
        assert.throw(()=>library.arrangeTheBooks(-1),"Invalid input")
        assert.throw(()=>library.arrangeTheBooks(-10),"Invalid input")
        assert.throw(()=>library.arrangeTheBooks(10.5),"Invalid input")
        assert.throw(()=>library.arrangeTheBooks(-10.5),"Invalid input")
        assert.throw(()=>library.arrangeTheBooks("5"),"Invalid input")
        assert.throw(()=>library.arrangeTheBooks("b"),"Invalid input")
        assert.throw(()=>library.arrangeTheBooks(NaN),"Invalid input")
    });
});


    });
});
