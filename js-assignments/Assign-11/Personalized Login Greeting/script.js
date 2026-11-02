
// Q1: Personalized Login Greeting

// Declare username
let userName = "Priyanka";

// Get current hour using Date object
let currentHour = new Date().getHours();

// Check time and generate greeting message
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
}
else if (currentHour >= 12 && currentHour < 17) {
    console.log(`Good Afternoon ${userName}!`);
}
else {
    console.log(`Good Evening ${userName}!`);
}
