class ArrayFunctions {
  /**
   * Gets the index of a specific item in an array
   * @param {array} arr - the array input to be processed
   * @param {*} item - the item to get the index of in the array
   * @returns {number} - the index of the item in the array
   * @example
   * indexOf([1,2,3,5,6], 3); // 2
   */
  indexOf(arr, item) {
    arr.indexOf(item, start)
    return ;
  }

  /**
   * Sum: You should be able to sum the items of an array
   * @param {number[]} arr - an array of numbers to be added summed
   * @returns {number} - the sum of the numbers in the array
   * @example
   * sum([1,2,3]); // 6
   */
  sum(arr) {
    // Hint: use the reduce method
    function getSum(total, num) {
      return total + Math.round(num);
    }
  }

  /**
   * Filter: Should filter out all instances of a value from an array
   * Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
   * @param {array} arr - the array to be filtered
   * @param {*} item  - the item to be filtered out
   * @returns {array} - the filtered array
   * @example
   * filter([1,2,3,5,6,2,4,2], 2); // [1,3,5,6,4]
   */
  filterOut(arr, item) {
    var newarray = arr.filter(function(item) {
      return condition;
    });
  }

  /**
   * Append: you should be able to add an item to the end of an array
   * @param {array} arr - the array to be appended to
   * @param {*} item - the item to be appended to the array
   * @returns {array} - the array with the appended item
   * @example
   * append([1,2,3], 4); // [1,2,3,4]
   */
  append(arr, item) {
    var arr = ["","",""];
    arr.push("");
    console.log(arr);
    // hint: push, slice, splice would all work. Pay attention to the return value in the docs
    return arr;
  }

  /**
   * Concat: you should be able to join together two arrays
   * @param {array} arr1 - the first array to be joined
   * @param {array} arr2 - the second array to be joined
   * @returns {array} - the joined array
   * @example
   * concat([1,2,3], [4,5,6]); // [1,2,3,4,5,6]
   */
  concat(arr1, arr2) {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['d', 'e', 'f'];
    const arr3 = arr1.concat(arr2);

    console.log(arr3);
  }

  /**
   * Square: takes an array of numbers and squares each number  
   * @param {number[]} arr - the array to be squared
   * @returns {number[]} - the squared array
   * @example
   * square([1,2,4,5]); // [1,4,16,25]
   */
  square(arr) {
    // hint: use .map
    function (arr) {
      return arr.map(function (x) {
        return Math.pow(x, 2);
      });
    }
  }
}
