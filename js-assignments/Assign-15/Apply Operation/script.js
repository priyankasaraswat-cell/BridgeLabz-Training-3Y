
"use strict";

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubled = applyOperation(numbers, function(num) {
    return num * 2;
});

// Square each number
const squared = applyOperation(numbers, num => num * num);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
