class StringFunctions {
    /**
     * @param {string} input
     * @returns {string}
     * @example
     * capitalize('hello world') // 'Hello world'
     * capitalize('HELLO WORLD') // 'Hello world'
     */
    capitalize(input) { 
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
      console.log(capitalizeFirstLetter('foo')); // Foo
    }
    /**
     * Returns a reversed string. Example: "abc" => "cba"
     * @param {string} input - the string input to be processed 
     * @returns  {string} - the reversed string
     * @example
     * reverse('abc') // 'cba'
     */
    reverse(input) { 
        array.reverse()
        return str;
    }
    reverseString(input) {
      function reverseString(s){
      return s.split("").reverse().join("");}
    }
    /**
     * Returns an array of the words in a string
     * @param {string} input - the string input to be processed
     * @returns {string[]} - an array of words in the string
     * @example
     * words('hello world') // ['hello', 'world']
     */
    split(input) { 
      let text = "";
      const myArray = text.split(" ");
      return [input];
    }
}
