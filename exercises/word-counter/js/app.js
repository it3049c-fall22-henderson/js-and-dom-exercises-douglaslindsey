// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function wordCount(val) {
  var wom = val.match(/\S+/g);
  return {
    charactersNoSpaces: val.replace(/\s+/g, '').length,
    characters: val.length,
    words: wom ? wom.length : 0,
    lines: val.split(/\r*\n/).length
  };
}
var textarea = document.getElementById('text');
var result = document.getElementById('result');

textarea.addEventListener('input', function() {
  var wc = wordCount(this.value);
  result.innerHTML = (`
   <br>Characters (no spaces):  ${wc.charactersNoSpaces}
   <br>Characters (and spaces): ${wc.characters}
   <br>Words: ${wc.words}
   <br>Lines: ${wc.lines}
  `);
});