// var Haiku = require('./../src/haiku-logic')
import { Haiku } from './../src/haiku-logic'

describe('Haiku', function() {

  it('should test whether a Haiku object is constructed with 3 lines', function() {
    console.log('test 1');
    var haiku = new Haiku("hello","my","friend")
    console.log('test 1.1');
    expect(haiku.line1).toEqual("hello");
    expect(haiku.line2).toEqual("my");
    expect(haiku.line3).toEqual("friend");
  });


  it('should test the "total" prototype associated with Haiku' , function() {
    var haiku = new Haiku("hello","my","friend")
    haiku.together()
    expect(haiku.total).toEqual(["hello","my","friend"]);
  });

  it('should test the "total" prototype associated with Haiku' , function() {
    var haiku = new Haiku("hello","my","friend")
    // haiku.test()
    expect(haiku.test('the')).toEqual('thetest');
  });

    it("checks if the input fields are filled", function() {
    var haiku = new Haiku("hello","my","friend")
    var haiku2 = new Haiku("hello","my","")
    expect(haiku.checker()).toEqual(true)
    expect(haiku2.checker()).toEqual(false)
    // expect(haiku.line1.length>0).toEqual(true);
    // expect(haiku.line2.length>0).toEqual(true);
    // expect(haiku.line3.length>0).toEqual(true);
  });


});
