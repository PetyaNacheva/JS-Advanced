let { Repository } = require("../solution.js");
const assert = require('chai').assert;

describe("Functionality", function () {
    describe("add", function () {
        it("corect", function () {
            let entity = {
                    name: "Pesho",
                    age: 22,
                    birthday: new Date(1998, 0, 7)
                };
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                let repository = new Repository(properties);
                assert.equal(0, repository.add(entity));
                assert.equal(1,repository.add(entity))
        });
        it("corect", function () {
            let entity = {
                    name: 564,
                    age: 22,
                    birthday: new Date(1998, 0, 7)
                };
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                let repository = new Repository(properties);
                assert.throw(()=>repository.add(entity),'Property name is not of correct type!' )
                
        });
        it("corect", function () {
            let entity = {
                    name: 564,
                    age: 22,
                    birth: new Date(1998, 0, 7)
                };
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                let repository = new Repository(properties);
                assert.throw(()=>repository.add(entity),'Property birthday is missing from the entity!' )
                
        });
        it("corect", function () {
            let entity = {
                    name: "Pesho",
                    age: 22,
                    birthday: new Date(1998, 0, 7)
                };
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                let repository = new Repository(properties);
                repository.add(entity);
                assert.deepEqual(entity, repository.getId(0));
        
        });
        it("corect", function () {
            let entity = {
                    name: "Pesho",
                    age: 22,
                    birthday: new Date(1998, 0, 7)
                };
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                let repository = new Repository(properties);
                repository.add(entity);
                assert.throw(()=>repository.getId(5),'Entity with id: 5 does not exist!' )
        
        });
        describe("update", function () {
            it("corect", function () {
                let entity = {
                        name: "Pesho",
                        age: 22,
                        birthday: new Date(1998, 0, 7)
                    };
                    let properties = {
                        name: "string",
                        age: "number",
                        birthday: "object"
                    };
                    let repository = new Repository(properties);
                    repository.add(entity);
                    let newentity = {
                        name: 'Gosho',
                        age: 22,
                        birthday: new Date(1998, 0, 7)
                    };
                    repository.update(0, newentity);
                    assert.deepEqual(newentity, repository.getId(0));
            });
            it("corect", function () {
                let entity = {
                        name: "Pesho",
                        age: 22,
                        birthday: new Date(1998, 0, 7)
                    };
                    let properties = {
                        name: "string",
                        age: "number",
                        birthday: "object"
                    };
                    let repository = new Repository(properties);
                    repository.add(entity);
                    let newentity = {
                        name: 'Gosho',
                        age: 22,
                        birthday: new Date(1998, 0, 7)
                    };
                    
                    assert.throw(()=>repository.update(5,newentity),'Entity with id: 5 does not exist!' );
            });
        
             describe("update", function () {
            it("corect", function () {
                let entity = {
                        name: "Pesho",
                        age: 22,
                        birthday: new Date(1998, 0, 7)
                    };
                    let properties = {
                        name: "string",
                        age: "number",
                        birthday: "object"
                    };
                    let repository = new Repository(properties);
                    repository.add(entity);
                    let newentity = {
                        name: 'Gosho',
                        age: 22,
                        birthday: new Date(1998, 0, 7)
                    };
                    repository.update(0, newentity);
                    assert.deepEqual(newentity, repository.getId(0));
            });
            it("corect", function () {
                let entity = {
                        name: "Pesho",
                        age: 22,
                        birthday: new Date(1998, 0, 7)
                    };
                    let properties = {
                        name: "string",
                        age: "number",
                        birthday: "object"
                    };
                    let repository = new Repository(properties);
                    repository.add(entity);
                    let newentity = {
                        name: 'Gosho',
                        age: 22,
                        birthday: new Date(1998, 0, 7)
                    };
                    
                    assert.throw(()=>repository.update(5,newentity),'Entity with id: 5 does not exist!' );
            });
            describe("del", function () {
                it("corect", function () {
                    let entity = {
                            name: "Pesho",
                            age: 22,
                            birthday: new Date(1998, 0, 7)
                        };
                        let properties = {
                            name: "string",
                            age: "number",
                            birthday: "object"
                        };
                        let repository = new Repository(properties);
                        repository.add(entity);
                        let newentity = {
                            name: 'Gosho',
                            age: 22,
                            birthday: new Date(1998, 0, 7)
                        };
                        repository.add(entity);
                        repository.add(newentity);
                        assert.throw(()=>repository.del(5),'Entity with id: 5 does not exist!' );
                });
                it("corect", function () {
                    let entity = {
                            name: "Pesho",
                            age: 22,
                            birthday: new Date(1998, 0, 7)
                        };
                        let properties = {
                            name: "string",
                            age: "number",
                            birthday: "object"
                        };
                        let repository = new Repository(properties);
                        repository.add(entity);
                        let newentity = {
                            name: 'Gosho',
                            age: 22,
                            birthday: new Date(1998, 0, 7)
                        };
                        
                       repository.add(newentity);
                       repository.del(0);
                       assert.equal(1,repository.count);
                });
            });    
    });

});
})
});
