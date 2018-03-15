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
    var totalVowel;
    console.log(this.line1.match(/[aeiouAEIOU]/gi));
    if (this.line1.match(/[aeiouAEIOU]/gi) == null)  {
      return this.counter
    } else {
          return this.counter += this.line1.match(/[aeiouAEIOU]/gi).length
    }
    //   if
  }
  //
  //
  //
  //
  //   + this.line2.match(/[aeiouAEIOU]/gi).length + this.line3.match(/[aeiouAEIOU]/gi).length
  //   return this.counter += totalVowel
  // }

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
