
"use strict";

// Book class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} was not issued.`);
        }
    }
}

// Create book objects
const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Guide", "Smith", "102"),
    new Book("Web Development", "David", "103")
];

// Display available books
function showAvailableBooks() {
    console.log("Available Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(`${book.title} by ${book.author}, ISBN: ${book.ISBN}`);
    });
}

// Issue book using ISBN
function issueByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

showAvailableBooks();
issueByISBN("101");
showAvailableBooks();
