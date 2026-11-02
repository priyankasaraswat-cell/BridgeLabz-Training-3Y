
// Q3: Math Utility Dashboard

// Declare a number
let x = 16.75;

// Perform mathematical operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cubeValue = Math.pow(x, 3);

// Generate random number between 10 and 50
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted result summary
let resultSummary = `
----- Math Utility Dashboard -----
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Cube: ${cubeValue.toFixed(2)}
Random Number: ${randomNumber}
`;

console.log(resultSummary);
