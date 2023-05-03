// index.js - working with partner to using Javascript arrays 
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 3, 2023

// sortUserName - a function that takes user input and sorts the lettrs
// of their name
function sortUserName() {
  var userName = window.prompt("Hi! Tell me your name, so I could fix it.")
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // note that above could be done in a single line:
  // userName.toLower().split('').sort(). join('')
  return nameSorted;
}

// Output
document.writeln("Hey, I fixed your name: ",
  sortUserName(), "</br>");