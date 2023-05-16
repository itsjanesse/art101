// index.js - working with partner to using Javascript libraries & jQuery
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 16, 2023

// created buttons in each minor section

buttonEl = $('.minor-section').append('<button id=button>click me</button>');

// toggle class specail and alert on button click
$(buttonEl).click(function () {
  $('.minor-section').toggleClass('special');
  alert("The button has been clicked!");
});