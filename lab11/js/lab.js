// index.js - working with partner to using Javascript libraries & jQuery
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: May 16, 2023

// created buttons in each minor section

buttonEl = $('.challenge, .problems, .results').append('<button id=button>click me</button>');

// toggle class special and alert on button click
$(buttonEl).click(function () {
  $(this).toggleClass('special');
});