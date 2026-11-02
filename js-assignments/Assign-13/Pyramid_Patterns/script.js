
"use strict";

// Take row limit from command line.
// Default value is 5.
const rows = Number(process.argv[2]) || 5;

if (!Number.isInteger(rows) || rows < 1) {
    console.log("Please enter a valid positive number.");
} else {
    console.log("----- Pyramid Pattern -----");

    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern);
    }
}

// Use let to keep loop variables block-scoped.
// Debug step-by-step to observe i and j.

// In strict mode, an undeclared loop variable
// causes a ReferenceError.
