
// Q2: Multi-Type Data Summary

// Declare variables of different data types
let userName = "Priyanka";
let age = 20;
let isStudent = true;
let subjects = ["HTML", "CSS", "JavaScript"];

let userDetails = {
    name: "Priyanka",
    course: "B.Tech CSE"
};

let emptyValue = null;
let undefinedValue;

// Create an array to store data summary
let dataSummary = [

    {
        Label: "User Name",
        Value: userName,
        Type: typeof userName
    },

    {
        Label: "Age",
        Value: age,
        Type: typeof age
    },

    {
        Label: "Student",
        Value: isStudent,
        Type: typeof isStudent
    },

    {
        Label: "Subjects",
        Value: subjects,
        Type: Array.isArray(subjects) ? "Array" : typeof subjects
    },

    {
        Label: "User Details",
        Value: userDetails,
        Type: typeof userDetails
    },

    {
        Label: "Empty Value",
        Value: emptyValue,
        Type: emptyValue === null ? "null" : typeof emptyValue
    },

    {
        Label: "Undefined Value",
        Value: undefinedValue,
        Type: typeof undefinedValue
    }

];

// Display formatted report in table format
console.table(dataSummary);
