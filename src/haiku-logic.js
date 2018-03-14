// function Haiku(the_poem) {
//   console.log('works');
//   return the_poem;
// }
// exports.haikuModule = Haiku;

// good below
// export function Haiku(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 === 0) {
//       output.push('ping-pong');
//     } else if ( i% 3 ===0 ) {
//       output.push('ping');
//     } else if ( i%5 ===0 ) {
//       output.push('pong');
//     } else {
//       output.push(i);
//     }
//   }
//   return output;
// }

export function Haiku(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}
