
// Q6: Event-Based Counter Simulation

// Initialize counter
let count = 0;

// Function to increase counter
function increment() {
    count++;
    console.log("After Increment:", count);
}

// Function to decrease counter
function decrement() {
    count--;
    console.log("After Decrement:", count);
}

// Nested function to demonstrate scope
function counterOperations() {

    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}

// Simulate click events manually
increment();
increment();
increment();

decrement();

counterOperations();
