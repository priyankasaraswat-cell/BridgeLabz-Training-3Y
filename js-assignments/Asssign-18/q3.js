
// Q3 - Modernize the Bug Tracker

// Promise-based function
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // Simulate random API failure
            let isError = Math.random() < 0.3;

            if (isError) {
                reject("API Error: Unable to fetch bugs!");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }

        }, 1000);
    });
}

// Fetch and display bugs
getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
