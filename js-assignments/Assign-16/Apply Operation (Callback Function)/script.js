
// Function that accepts an array and callback
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Original array
const numbers = [1, 2, 3, 4];

// Callback to double each number
function doubleNumber(num) {
    return num * 2;
}

// Callback to square each number
function squareNumber(num) {
    return num * num;
}

// Apply both operations
const doubledNumbers = applyOperation(numbers, doubleNumber);
const squaredNumbers = applyOperation(numbers, squareNumber);

// Display results
console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);
