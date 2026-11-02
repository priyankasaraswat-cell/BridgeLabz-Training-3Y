
"use strict";

// Create login form
document.body.innerHTML = `
    <h2>Login Form</h2>

    <form id="loginForm">
        <input type="text" id="username" placeholder="Username"><br><br>
        <input type="password" id="password" placeholder="Password"><br><br>
        <button type="submit">Login</button>
    </form>

    <p id="result"></p>
`;

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    // Username must have at least 5 characters
    const usernameRegex = /^.{5,}$/;

    // Password: 8 characters, uppercase, lowercase, number and special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    let errors = [];

    if (!usernameRegex.test(username)) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (!passwordRegex.test(password)) {
        errors.push("Password must contain at least 8 characters, uppercase, lowercase, number and special character.");
    }

    if (errors.length === 0) {
        result.style.color = "green";
        result.textContent = "Login Validation Successful!";
    } else {
        result.style.color = "red";
        result.innerHTML = errors.join("<br>");
    }
});
