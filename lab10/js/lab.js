// index.js - working with partner to using Javascript events
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 15, 2023

// sortUserName - function that takes the user's name

function sortUserName() {
  var userName = inputValue
  console.log("userName =", userName);
  var userArray = userName.split('');
  console.log("userArray =", userArray);
  var userArraySort = userArray.sort();
  console.log("userArraySort =", userArraySort);
  var userSorted = userArraySort.join('');
  console.log("userSorted =", userSorted);
  return userSorted;
}

var button = document.getElementById('my-button');

var outputEl = document.getElementById('output');

button.addEventListener('click', function () {
  var inputValue = document.getElementById('user-name').value;
  var sortedUserName = sortUserName(inputValue);
  outputEl.innerHTML = sortedUserName;
});