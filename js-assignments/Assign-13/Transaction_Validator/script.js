
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
    { id: 5, amount: 3000 }
];

const valid = [];
const invalid = [];

console.log("----- Transaction Report -----");

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("Null transaction");
        }

        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new Error("Missing amount or ID");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }

        valid.push(transaction);
        console.log("Valid Transaction:", transaction);

    } catch (error) {
        invalid.push({
            transaction: transaction,
            reason: error.message
        });

        console.log("Invalid Transaction:", error.message);
    }
}

console.log("\nValid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);

// Debugging: Set a breakpoint inside the loop
// to observe transaction and array values.
