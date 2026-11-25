
// Q1 - The Startup Morning: Async Coffee Maker

// Step 1: Boil Water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to boil water!");
            } else {
                console.log("1. Water is boiling...");
                resolve("Hot water is ready!");
            }
        }, 1500);
    });
}

// Step 2: Brew Coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to brew coffee!");
            } else {
                console.log("2. Coffee is brewing...");
                resolve("Coffee is brewed!");
            }
        }, 1500);
    });
}

// Step 3: Pour Coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee!");
            } else {
                console.log("3. Pouring coffee into the cup...");
                resolve("Coffee poured successfully!");
            }
        }, 1500);
    });
}

// Promise Chaining
boilWater()
    .then((result) => {
        console.log(result);
        return brewCoffee();
    })
    .then((result) => {
        console.log(result);
        return pourCoffee();
    })
    .then((result) => {
        console.log(result);
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });
