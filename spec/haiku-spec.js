// var haiku = require('./../src/haiku-logic')
import { Haiku } from './../src/haiku-logic'

describe('Haiku', function() {

  it('should test whether a Triangle has three sides', function() {
    var haiku = new Haiku(3)
    expect(haiku).toEqual([1,2,"ping"]);
      });
  });
