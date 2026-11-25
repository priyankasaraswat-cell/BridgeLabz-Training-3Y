
console.log("Start");

// Macrotask: setTimeout callback
setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

// Microtask: Promise callback
Promise.resolve().then(() => {
    console.log("Microtask: Promise");
});

// Synchronous log
console.log("Synchronous log");

console.log("End");

/*
Explanation:
1. Synchronous code executes first.
2. Promise.then() callback goes into the microtask queue.
3. setTimeout() callback goes into the macrotask queue.
4. After synchronous code finishes, JavaScript
   executes all microtasks before macrotasks.
5. Therefore, Promise callback runs before setTimeout.
*/
