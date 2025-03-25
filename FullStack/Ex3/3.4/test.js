"use strict";
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
class Library {
    constructor() {
        this.requestQueue = new Queue();
    }
    requestBook(studentName, bookTitle) {
        const bookRequest = { studentName, bookTitle };
        this.requestQueue.enqueue(bookRequest);
    }
    processRequest() {
        if (this.requestQueue.isEmpty()) {
            console.log("No book requests in the queue.");
        }
        else {
            const nextRequest = this.requestQueue.dequeue();
            if (nextRequest) {
                console.log(`The book "${nextRequest.bookTitle}" is now available and assigned to ${nextRequest.studentName}.`);
            }
        }
    }
    viewNextRequest() {
        const nextRequest = this.requestQueue.peek();
        if (nextRequest) {
            console.log(`Next request: ${nextRequest.studentName} is waiting for "${nextRequest.bookTitle}".`);
        }
        else {
            console.log("No requests in the queue.");
        }
    }
    viewQueueSize() {
        console.log(`There are ${this.requestQueue.size()} book requests in the queue.`);
    }
}
const universityLibrary = new Library();
universityLibrary.requestBook("Alice", "Introduction to TypeScript");
universityLibrary.requestBook("Bob", "Advanced JavaScript");
universityLibrary.requestBook("Charlie", "Data Structures in C++");
universityLibrary.viewNextRequest();
universityLibrary.processRequest();
universityLibrary.processRequest();
universityLibrary.viewNextRequest();
universityLibrary.processRequest();
universityLibrary.viewQueueSize();
