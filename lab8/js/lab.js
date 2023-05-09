// index.js - working with partner to using Javascript anon functions and
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 8, 2023

//variables
var outputEl = document.getElementById("output");

//functions
function isEven(x) {
  return (x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array: ", array);
outputEl.innerHTML = "Original array: [" + array + "]<br>";

var result = array.map(isEven);
// should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", result);
outputEl.innerHTML += "Evenness of array: [" + result + "]<br>";

var result = array.map(function (x) {
  return x ** 0.5;
})

console.log("Squareroot of array:", result)
outputEl.innerHTML += "Square roots of my array: [" + result + "]<br>";
