var syllable = require('syllable');
export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.total = null;
    this.counter = 0;
  }

  together() {
    this.total = [this.line1, this.line2, this.line3];
  }

  test(word) {
    return word+"test";
  }

  vowelChecker() {
    this.total = [this.line1, this.line2, this.line3];
    var full = this.total.join()
    if (full.match(/[aeiouAEIOU]/gi) === null)  {
      return this.counter
    } else {
          return this.counter += full.match(/[aeiouAEIOU]/gi).length
    }
  }

  total_checker(){
    if ( syllable(this.line1)==5&&syllable(this.line3)==5&&syllable(this.line2)==7 ) {
      console.log(syllable(this.line1+this.line2+this.line3))
      return "yep hiaku"
    }
  }

  checker() {
  if (this.line1.length>0 && this.line2.length>0 && this.line3.length>0)  {
    // console.log('yes its true')
    return true
  }
    else {
      return false

    }
  }


}


// exports.haikuModule = Haiku;

// export function Haiku(line1, line2, line3) {
//   this.line1 = line1;
//   this.line2 = line2;
//   this.line3 = line3;
//   this.total = null;
// }
//
// Haiku.prototype.together = function() {
//   this.total = [this.line1, this.line2, this.line3]
// }
//
// Haiku.prototype.test = function(word) {
//   return word+'test';
// }
