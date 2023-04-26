// index.js - working with partner to using Javascript arrays and objects
// Author: Janesse Liang <jlian100@ucsc.edu>
// Date: April 26, 2023

// Define Variables
myTransport = ["Toyota Corolla", " my skateboard", " rides from friends", " and buses"];

// Creating an object for my main ride
myMainRide = {
  make : "Toyota",
  model : "Corolla",
  year : 2023,
  age : function() {
    return 2023 - this.year;
  }
}

// Output
document.writeln("Different transportation methods I use: " + myTransport + "<br>");

// Allows us to write an object to the document
document.writeln("My main ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");