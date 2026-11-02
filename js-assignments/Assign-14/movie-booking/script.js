
"use strict";

// Create booking form
document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>

    <form id="bookingForm">
        <input type="text" id="name" placeholder="Enter Name"><br><br>
        <input type="email" id="email" placeholder="Enter Email"><br><br>
        <input type="number" id="seats" placeholder="Number of Seats"><br><br>
        <button type="submit">Book Ticket</button>
    </form>

    <div id="ticketDetails"></div>
`;

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert("Name must contain only alphabets.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        alert("Seats must be between 1 and 10.");
        return;
    }

    // Store booking details in an object
    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    document.getElementById("ticketDetails").innerHTML = `
        <h3>Booking Successful!</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;

    console.log("Booking Details:", booking);
});
