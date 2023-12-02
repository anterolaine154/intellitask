// filename: SophisticatedCode.js

/**
 * This code demonstrates a complex system for managing a library's inventory.
 * It includes various classes and functions to perform actions like adding,
 * removing, and searching for books, as well as creating reports and statistics.
 */

 class Book {
   constructor(title, author, yearPublished, numPages) {
     this.title = title;
     this.author = author;
     this.yearPublished = yearPublished;
     this.numPages = numPages;
   }
 }

 class Library {
   constructor(name, location) {
     this.name = name;
     this.location = location;
     this.books = [];
   }

   addBook(book) {
     this.books.push(book);
   }

   removeBook(title) {
     this.books = this.books.filter(book => book.title !== title);
   }

   searchByTitle(title) {
     return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
   }

   searchByAuthor(author) {
     return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
   }

   generateInventoryReport() {
     let report = `Inventory Report for ${this.name} (${this.location})\n`;
     report += `Total Books: ${this.books.length}\n`;

     // Additional complex logic to generate various statistics and summaries

     return report;
   }
 }

 // Usage example

 const library = new Library('My Library', 'New York');
 library.addBook(new Book('The Catcher in the Rye', 'J.D. Salinger', 1951, 234));
 library.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 281));
 library.addBook(new Book('1984', 'George Orwell', 1949, 328));
 library.addBook(new Book('Pride and Prejudice', 'Jane Austen', 1813, 432));

 console.log(library.generateInventoryReport());
 console.log(library.searchByTitle('The'));
 console.log(library.searchByAuthor('Austen'));