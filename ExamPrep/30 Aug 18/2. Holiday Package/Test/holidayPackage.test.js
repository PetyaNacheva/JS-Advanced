const HolidayPackage = require('../holidayPackage');
const assert= require('chai').assert;
const expect = require('chai').expect;

describe('Test functionality', function(){
        let holiday;
        describe ('constructorTest', function(){
            it('test with no params', function(){
                holiday = new HolidayPackage('Itali', 'Summer');
                expect(holiday.vacationers).to.deep.equal([]);
                expect(holiday.insuranceIncluded).to.deep.equal(false);

            });
            describe('add vacantioner', function(){
                it('showld trow with empty input', function(){
                    holiday = new HolidayPackage('Itali', 'Summer');
                    expect(()=>holiday.addVacationer(' ')).to.throw(Error, "Vacationer name must be a non-empty string");
                    expect(()=>holiday.addVacationer(5)).to.throw(Error, "Vacationer name must be a non-empty string");
                })
                it('throw error with incorect names', function(){
                    holiday = new HolidayPackage('Italy', 'Summer')
                expect(()=>holiday.addVacationer('Georgi')).to.throw(Error, 'Name must consist of first name and last name');
                expect(()=> holiday.addVacationer('Georgi Georgiev Georgiev')).to.throw(Error, 'Name must consist of first name and last name');
            
                })
                
                
                it('test with correct vacationer', function(){
                    holiday = new HolidayPackage('Italy', 'Summer');
                    holiday.addVacationer('Peter Petrov');
                    holiday.addVacationer('Georgi Georgiev');
                    assert.equal(2, holiday.vacationers.length)
                })
            })

            describe('show vacationers', function(){
                it('shoult test with noe vacationers',function (){
                    holiday = new HolidayPackage('Italy', 'Summer');
                    expect(holiday.showVacationers()).to.be.equal("No vacationers are added yet");
                })
                it('test with correct vacationers', function(){
                    holiday = new HolidayPackage('Italy', 'Summer');
                    holiday.addVacationer('Peter Petrov');
                    holiday.addVacationer('Georgi Georgiev');
                    assert.equal(2, holiday.vacationers.length)
                    expect(holiday.showVacationers()).to.be.equal('Vacationers:\nPeter Petrov\nGeorgi Georgiev')
                })
            })
            
            describe('Insurance', function(){
                it('without vacationers', function(){
                    holiday = new HolidayPackage('Italy','Summer');
                    expect(()=>holiday.generateHolidayPackage()).to.throw(Error,"There must be at least 1 vacationer added")
                })
                it('withc corrected vacationers', function(){
                    holiday = new HolidayPackage('Italy','Summer');
                    holiday.addVacationer('Peter Petrov');
                    holiday.addVacationer('Georgi Georgiev');
                    holiday.insuranceIncluded = true;
                    expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nPeter Petrov\nGeorgi Georgiev\nPrice: 1100`)
                })

                it('withc corrected vacationers', function(){
                    holiday = new HolidayPackage('Italy','Winter');
                    holiday.addVacationer('Peter Petrov');
                    holiday.addVacationer('Georgi Georgiev');
                    holiday.insuranceIncluded = true;
                    expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nPeter Petrov\nGeorgi Georgiev\nPrice: 1100`)
                })
                it('withc corrected vacationers', function(){
                    holiday = new HolidayPackage('Italy','Spring');
                    holiday.addVacationer('Peter Petrov');
                    holiday.addVacationer('Georgi Georgiev');
                    holiday.insuranceIncluded = true;
                    expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nPeter Petrov\nGeorgi Georgiev\nPrice: 900`)
                })
                it('withc corrected vacationers', function(){
                    holiday = new HolidayPackage('Italy','Autumn');
                    holiday.addVacationer('Peter Petrov');
                    holiday.addVacationer('Georgi Georgiev');
                    holiday.insuranceIncluded = true;
                    expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nPeter Petrov\nGeorgi Georgiev\nPrice: 900`)
                })

                it('withc corrected vacationers', function(){
                    holiday = new HolidayPackage('Italy','Summer');
                    holiday.addVacationer('Peter Petrov');
                    holiday.addVacationer('Georgi Georgiev');
                    
                    expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nPeter Petrov\nGeorgi Georgiev\nPrice: 1000`)
                })
            })
    })
  
})