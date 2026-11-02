
// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function that accepts a callback
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Execute callback function
    callback();
}

// Function call
greetUser("Priyanka", showEndMessage);
