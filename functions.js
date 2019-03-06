// There is another syntax for creating a function that is called a Function Expression. It looks like this:

let sayHi = function() {
    alert( "Hello" );
  };

function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
let func = sayHi;    // (2) copy
  
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)


let age = 16; // take 16 as an example
let welcome;
if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {     //  for age = 16, this "welcome" is never created
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined



// Arrow functions
// There’s one more very simple and concise syntax for creating functions, that’s often better than Function Expressions. It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ...argN) => expression

// In other words, it’s roughly the same as:

let func = function(arg1, arg2, ...argN) {
  return expression;
};


let sum = (a, b) => a + b;

/* The arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 2); // from index 1 remove 1 element
console.log(arr)

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]