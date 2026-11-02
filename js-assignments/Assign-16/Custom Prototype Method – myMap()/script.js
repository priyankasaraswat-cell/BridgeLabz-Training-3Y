
// Q8: Create a custom myMap() method for all arrays

// Add myMap method to Array prototype
Array.prototype.myMap = function (callback) {
    let result = [];

    // Loop through each array element
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Example 1: Double each number
let numbers = [1, 2, 3];

let doubled = numbers.myMap(num => num * 2);
console.log("Doubled:", doubled);

// Example 2: Square each number
let squared = numbers.myMap(num => num * num);
console.log("Squared:", squared);
