
// Q10 - The Final Delivery: Async Pipeline Debugger

// Function to simulate an asynchronous delivery step
function deliveryStep(message) {

    return new Promise((resolve, reject) => {

        // Generate random delay between 1 and 2 seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {

            // Randomly simulate success or failure
            if (Math.random() < 0.8) {

                resolve(message);

            } else {

                reject("Step failed: " + message);

            }

        }, delay);
    });
}


// Async function to run the complete pipeline
async function runPipeline() {

    try {

        // Starting the delivery pipeline
        console.log("Start Pipeline");

        // Step 1: Take Order
        await deliveryStep("Step 1: Order taken");
        console.log("Step 1: Order taken");

        // Step 2: Prepare Food
        await deliveryStep("Step 2: Food prepared");
        console.log("Step 2: Food prepared");

        // Step 3: Pack Food
        await deliveryStep("Step 3: Package ready");
        console.log("Step 3: Package ready");

        // Step 4: Dispatch Order
        await deliveryStep("Step 4: Out for delivery");
        console.log("Step 4: Out for delivery");

        // Step 5: Deliver Order
        await deliveryStep("Delivery completed!");
        console.log("Delivery completed!");

    }

    catch (error) {

        // Handle failure if any step rejects
        console.log("Pipeline failed!");

        console.log("Error:", error);

    }
}


// Execute the pipeline
runPipeline();
