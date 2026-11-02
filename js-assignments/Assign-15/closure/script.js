
"use strict";

// Function returning another function
function makeMultiplier(multiplier) {

    // Inner function remembers multiplier
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);

console.log(triple(5));  // 15

const double = makeMultiplier(2);

console.log(double(5));  // 10
