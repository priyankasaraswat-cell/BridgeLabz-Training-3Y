
"use strict";

// var is hoisted and initialized with undefined.
console.log("Score:", score);

// Function declarations are hoisted completely.
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

// let is not accessible before initialization.
let status = "ready";

startGame();

function startGame() {
    console.log("Status:", status);
}

// Corrected ES6 version using const and arrow function
const showScore = () => {
    const newScore = 75;
    console.log("New Score:", newScore);
};

showScore();

// Hoisting observations:
// var: declaration is hoisted, value initially undefined.
// Function declaration: can be called before its definition.
// let/const: remain in the temporal dead zone until initialized.
