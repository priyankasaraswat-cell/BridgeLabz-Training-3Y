
"use strict";

const user = {
    name: "Priyanka",

    // Arrow function does not have its own this.
    showName: () => {
        console.log("Arrow function:", this.name);
    }
};

user.showName();

// Correct way: normal function
user.showName = function() {
    console.log("Normal function:", this.name);
};

user.showName();
