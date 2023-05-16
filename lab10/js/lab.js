// index.js - working with partner to using Javascript events
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 15, 2023

// sorting user input
function sortUserName() {
  var userName = document.getElementById('user-name').value;
  console.log("userName: ", userName);
  var sortedName = userName.toLowerCase().split('').sort().join('');
  console.log("sortedName: ", sortedName);
  return sortedName;
}

var button = document.getElementById('my-button');
var outputEl = document.getElementById('output');

button.addEventListener('click', function () {
  inputValue = document.getElementById('user-name').value;
  console.log("Your input: ", sortedName);
  var sortedName = sortUserName();
  outputEl.innerHTML = "Your sorted name is: " + sortedName;
});
