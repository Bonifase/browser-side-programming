let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5


let str = "test";
let arr = ["t", "e", "s", "t"];

alert( str.slice(1, 3) ); // es
alert( arr.slice(1, 3) ); // e,s

alert( str.slice(-2) ); // st
alert( arr.slice(-2) ); // s,t


let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
//[1, 2, arrayLike]

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });

  let range = {
    from: 1,
    to: 5
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  