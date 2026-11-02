
// Q5: Weather Activity Planner

// Declare weather variables
let temperature = 38;
let isRaining = false;
let windSpeed = 10;

// Check weather conditions and suggest activity
if (isRaining || (temperature < 15 && windSpeed > 20)) {
    if (isRaining) {
        console.log("Stay indoors with hot coffee.");
    } else {
        console.log("Too cold and windy — stay home.");
    }
}
else if (temperature > 35) {
    console.log("Go swimming.");
}
else {
    console.log("Perfect day for a walk.");
}
