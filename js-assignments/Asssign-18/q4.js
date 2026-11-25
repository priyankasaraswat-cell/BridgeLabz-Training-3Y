
// Q4 - Manage Concurrent Server Responses

// Server A - responds in 2 seconds
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A failed!");
            } else {
                resolve("Server A");
            }
        }, 2000);
    });
}

// Server B - responds in 3 seconds
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B failed!");
            } else {
                resolve("Server B");
            }
        }, 3000);
    });
}

// Promise.all() - Wait for both servers
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch((error) => {
        console.log("Deployment Error:", error);
    });

// Promise.race() - First server to respond
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Race Error:", error);
    });
