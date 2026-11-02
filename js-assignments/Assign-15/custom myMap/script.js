
"use strict";

// Creating custom myMap method
Array.prototype.myMap = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result.push(callback(this[i], i, this));
        }
    }

    return result;
};

// Testing custom method
const numbers = [1, 2, 3];

const doubled = numbers.myMap(num => num * 2);

console.log("Original Array:", numbers);
console.log("New Array:", doubled);
