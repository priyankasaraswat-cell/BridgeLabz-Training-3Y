
"use strict";

function showMessage() {
    // Strict mode does not allow undeclared variables.
    // greeting = "Welcome"; // This causes ReferenceError.

    const greeting = "Welcome";
    console.log(greeting);
}

try {
    // Demonstrating the original error
    greeting = "Welcome";
} catch (error) {
    console.log("Original Error:", error.message);
}

// Corrected function
showMessage();

// Debugging observation:
// Use a breakpoint on console.log(greeting).
// Watch greeting in the VS Code debugger.
