// index.js - working with partner using Javascript DOM elements
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 9, 2023

// creating variables
var oldEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("h")

// modifying first new element
oldEl.appendChild(new1El);
new1El.id = "slay";
new1El.innerHTML = "Jan was here!";
new1El.style.fontSize = "30pt";
new1El.style.fontWeight = "bold";

// modifying second new element
oldEl.appendChild(new2El);
new2El.id = "surprise";
new2El.innerHTML = "There's nothing!";
new2El.style.fontSize = "40pt";
new2El.style.fontWeight = "bolder";
