'use strict';

const myText = 'Hello prototype!';

myText.split(''); // <- de onde vem esse4 "split" ?

console.log(myText.__proto__.split);
// f split() { [native code] }

const myText2 = String('Hello prototype!');
console.log(myText2.__proto__.split === String.prototype.split);
// true