
"use strict";

// Initial user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Create update form
document.body.innerHTML = `
    <h2>Update User Details</h2>

    <form id="updateForm">
        <input type="text" id="name" placeholder="Enter Name"><br><br>
        <input type="email" id="email" placeholder="Enter Email"><br><br>
        <input type="number" id="age" placeholder="Enter Age"><br><br>

        <button type="submit">Update Details</button>
    </form>

    <h3>Updated User Details</h3>
    <div id="userDetails"></div>
`;

// Display initial details in form
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

// Function to display object details
function displayUser() {
    document.getElementById("userDetails").innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
    `;

    console.log("Updated User Object:", user);
}

// Update object on form submission
document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    displayUser();
});

// Show initial details
displayUser();
