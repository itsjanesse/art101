// index.js - working with partner to using Javascript conditionals
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 18, 2023

// sortingHat - sorts user input into Hogwarts house

function sortingHat(str) {
  var len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  }
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}
// Output
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "You have been sorted into " + house +"!";
  document.getElementById("output").innerHTML = newText;
})