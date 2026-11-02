
"use strict";

// Mixed API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("----- Dynamic Data Parser Report -----");

for (let value of apiData) {
    const numberValue = Number(value);

    console.log("\nOriginal Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", Boolean(value));
    console.log("String:", String(value));

    // Check valid numeric values
    if (value !== null && value !== undefined &&
        String(value).trim() !== "" && Number.isFinite(numberValue)) {
        validNumbers.push(numberValue);
    } else {
        invalidNumbers.push(value);
    }
}

console.log("\nValid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Total Valid:", validNumbers.length);
console.log("Total Invalid:", invalidNumbers.length);
