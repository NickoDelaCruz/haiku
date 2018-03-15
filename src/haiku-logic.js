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
    this.counter = null;

  }



  together() {
    this.total = [this.line1, this.line2, this.line3];
  }
  test(word) {
    return word+"test";
  }

  vowelChecker() {
    // var counter = this.counter = 0;
    var totalVowel = 0;
    // this.total = [this.line1, this.line2, this.line3];
    console.log(this.counter)
    var sentence1 = this.line1.match(/[aeiouAEIOU]/gi)
    totalVowel = sentence1.length
    console.log(sentence1.length)
    // sentence1 === null ? 0 : sentence1.length;
    return this.counter += totalVowel
  }
    // (function(sentence) {
    //   console.log(sentence,vowel)
    //   var single_sentence = null;
    //   console.log(this.counter);
    //   if((sentence.match(/[aeiouAEIOU]/gi))>0) {
    //     return single_sentence = true
    //   } else {
    //     return single_sentence = false
    //   }
    //   var total_vowels = single_sentence ? single_sentence.length : 0;
    //   console.log(counter += total_vowels);
    //   return counter +=total_vowels;


      // old below
      // var vowel = this.line1.forEach(function(sentence) {
        // console.log(sentence,vowel)
        // var single_sentence = null;
        // console.log(this.counter);
        // if((sentence.match(/[aeiouAEIOU]/gi))>0) {
        //   return single_sentence = true
        // } else {
        //   return single_sentence = false
        // }
        // var total_vowels = single_sentence ? single_sentence.length : 0;
        // console.log(counter += total_vowels);
        // return counter +=total_vowels;
  //   }
  // }

  checker() {
  if (this.line1.length>0 && this.line2.length>0 && this.line3.length>0)  {
    console.log('yes its true')
    return true
  }
    else {
      return false

    }
  }


}
