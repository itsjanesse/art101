// index.js - working with partner to using Javascript anon functions and
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 8, 2023

// 
function isEven(x) {
  return (x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
// should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", result);

var results = array.map(function (x) {
  return x ** 0.5;
})

console.log("Squareroot of array:", results)

// Output
var outputEl = document.getElementById("output");
outputEl.innerHTML = results; //10,9,2,4,6.48074069840786,12,100