
"use strict";

console.log("----- Strict Mode Showdown -----");

// Original code has two problems:
// 1. Duplicate parameter names are not allowed in strict mode.
// 2. Deleting a declared variable is not allowed.

// Demonstrate duplicate parameter error
try {
    Function('"use strict"; return function demo(a, a) {};');
} catch (error) {
    console.log("Duplicate Parameter Error:", error.message);
}

// Demonstrate delete variable error
try {
    Function('"use strict"; let total = 10; delete total;');
} catch (error) {
    console.log("Delete Variable Error:", error.message);
}

// Correct ES6 version
function demo(a, b) {
    const total = a + b;
    console.log("Total:", total);
    return total;
}

demo(5, 10);

// Strict mode also prevents undeclared variables.
try {
    unknownVariable = 100;
} catch (error) {
    console.log("Undeclared Variable Error:", error.message);
}

// Correct declaration
const total = 100;
console.log("Correct Total:", total);

// Observations:
// Strict mode prevents duplicate parameters.
// Strict mode prevents deleting declared variables.
// Strict mode prevents accidental global variables.
// let and const provide block scope.
