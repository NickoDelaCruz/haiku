// var Haiku = require('./../src/haiku-logic')
import { Haiku } from './../src/haiku-logic'

describe('Haiku', function() {

  it('should test whether a Triangle has three sides', function() {
    var haiku = new Haiku(1,2,"ping")
    console.log(haiku +22);
    expect(haiku.line1).toEqual(1);
      });
  });
