
"use strict";

// Create student registration form
document.body.innerHTML = `
    <h2>Student Registration Form</h2>

    <form id="studentForm">
        <input type="text" id="name" placeholder="Enter Name"><br><br>
        <input type="email" id="email" placeholder="Enter Email"><br><br>
        <input type="text" id="phone" placeholder="Enter Phone"><br><br>
        <input type="password" id="password" placeholder="Enter Password"><br><br>

        <button type="submit">Register</button>
    </form>

    <div id="message"></div>
`;

const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;

    const fields = [name, email, phone, password];
    fields.forEach(field => field.style.border = "2px solid red");

    let errors = [];

    if (nameRegex.test(name.value.trim())) {
        name.style.border = "2px solid green";
    } else {
        errors.push("Name must contain only alphabets.");
    }

    if (emailRegex.test(email.value.trim())) {
        email.style.border = "2px solid green";
    } else {
        errors.push("Enter a valid email.");
    }

    if (phoneRegex.test(phone.value.trim())) {
        phone.style.border = "2px solid green";
    } else {
        errors.push("Phone must contain exactly 10 digits.");
    }

    if (passwordRegex.test(password.value)) {
        password.style.border = "2px solid green";
    } else {
        errors.push("Password needs an uppercase letter, number and special character.");
    }

    message.innerHTML = errors.length
        ? errors.join("<br>")
        : "Registration Successful!";
});
