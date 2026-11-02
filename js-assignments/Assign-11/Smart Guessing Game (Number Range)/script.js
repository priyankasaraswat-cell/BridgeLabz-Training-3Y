
// Q7: Smart Guessing Game

// Generate random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Declare test guess value
let userGuess = 25;

// Display secret number and user guess
console.log("Secret Number: " + secretNumber);
console.log("Your Guess: " + userGuess);

// Check user's guess
if (userGuess === secretNumber) {
    console.log("Correct guess!");
}
else if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
}
else if (userGuess > secretNumber) {
    console.log("Too high!");
}
else {
    console.log("Too low!");
}
