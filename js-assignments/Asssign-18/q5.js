
// Q5 - Frontend Rush: Avoiding Callback Hell

// PART 1: Using Nested Callbacks (Callback Hell)

function design(callback) {
    setTimeout(() => {
        console.log("1. Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("2. Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("3. Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("4. Deployment completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("5. Celebration time!");
        callback();
    }, 1000);
}

// Nested callback chain
console.log("Starting callback pipeline...");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Callback pipeline finished!");
                });
            });
        });
    });
});


// PART 2: Using Async/Await

function waitAndLog(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    console.log("Starting async/await pipeline...");

    await waitAndLog("1. Design completed");
    await waitAndLog("2. Build completed");
    await waitAndLog("3. Testing completed");
    await waitAndLog("4. Deployment completed");
    await waitAndLog("5. Celebration time!");

    console.log("Async/Await pipeline finished!");
}

runPipeline();

/*
Why async/await improves readability:

1. It makes asynchronous code look like synchronous code.
2. It avoids deeply nested callback functions.
3. It makes code easier to read and maintain.
4. It provides better error handling using try/catch.
*/
