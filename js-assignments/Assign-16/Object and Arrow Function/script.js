
// Create user object with arrow function
const user = {
    name: "Priyanka",

    // Arrow function
    showName: () => {
        console.log("Arrow Function:", this.name);
    }
};

// Call arrow function
user.showName();

// Fix using normal function
const user2 = {
    name: "Priyanka",

    // Normal function
    showName: function () {
        console.log("Normal Function:", this.name);
    }
};

// Call normal function
user2.showName();
