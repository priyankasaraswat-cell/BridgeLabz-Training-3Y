

"use strict";

// Function that accepts a callback.
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Calling the main function
greetUser("Priyanka", showEndMessage);
