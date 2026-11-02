
// Outer function
function makeMultiplier(multiplier) {

    // Inner function
    return function (number) {

        // Multiply number
        return number * multiplier;
    };
}

// Create multiplier functions
const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const quadruple = makeMultiplier(4);

// Call functions
console.log("Triple of 5:", triple(5));
console.log("Double of 5:", double(5));
console.log("Quadruple of 5:", quadruple(5));
