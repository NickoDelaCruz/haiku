// var Haiku = require('./../src/haiku-logic')
import { Haiku } from './../src/haiku-logic'

describe('Haiku', function() {

  it('should test whether a Haiku has is constructed with 3 lines', function() {
    var haiku = new Haiku("hello","my","friend")
    expect(haiku.line1).toEqual("hello");
    expect(haiku.line2).toEqual("my");
    expect(haiku.line3).toEqual("friend");
  });

  it('should test whether a Triangle has three sides', function() {
    var haiku = new Haiku(1,2,"ping")
    console.log(haiku +33);
    haiku.together()
    expect(haiku.total).toEqual([1,2,"ping"]);
  });


});
