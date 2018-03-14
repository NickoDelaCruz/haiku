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

  }

  together() {
    this.total = [this.line1, this.line2, this.line3]
  }
  test(word) {
    return word+"test";
  }
}

// exports.haikuModule = Haiku;
