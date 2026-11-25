
// Q7 - The Lazy Loader: Promise Combinator Practice

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Profile Failed");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Posts Failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Messages Failed");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

// Calculate total execution time
const startTime = Date.now();

// Handle all Promises together
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
])
.then((results) => {

    const modules = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(modules[index] + ": Success - " + result.value);
        } else {
            console.log(modules[index] + ": Failed - " + result.reason);
        }
    });

    const endTime = Date.now();

    console.log("Total time taken:", endTime - startTime, "ms");
});
