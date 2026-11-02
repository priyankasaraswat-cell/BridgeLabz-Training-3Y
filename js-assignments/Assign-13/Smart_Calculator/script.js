
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return Math.pow(a, b);

        case "root":
            if (a < 0) {
                throw new Error("Cannot find square root of negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new Error("InvalidOperationError");
    }
}

console.log("----- Smart Calculator -----");

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation} Error: ${error.message}`);
    }
}

// Testing custom errors
try {
    calculate("root", -25, 0);
} catch (error) {
    console.log("Root Error:", error.message);
}

try {
    calculate("multiply", 10, 5);
} catch (error) {
    console.log("Operation Error:", error.message);
}
