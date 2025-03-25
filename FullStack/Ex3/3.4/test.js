var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    return Queue;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.requestQueue = new Queue();
    }
    Library.prototype.requestBook = function (studentName, bookTitle) {
        var bookRequest = { studentName: studentName, bookTitle: bookTitle };
        this.requestQueue.enqueue(bookRequest);
    };
    Library.prototype.processRequest = function () {
        if (this.requestQueue.isEmpty()) {
            console.log("No book requests in the queue.");
        }
        else {
            var nextRequest = this.requestQueue.dequeue();
            if (nextRequest) {
                console.log("The book \"".concat(nextRequest.bookTitle, "\" is now available and assigned to ").concat(nextRequest.studentName, "."));
            }
        }
    };
    Library.prototype.viewNextRequest = function () {
        var nextRequest = this.requestQueue.peek();
        if (nextRequest) {
            console.log("Next request: ".concat(nextRequest.studentName, " is waiting for \"").concat(nextRequest.bookTitle, "\"."));
        }
        else {
            console.log("No requests in the queue.");
        }
    };
    Library.prototype.viewQueueSize = function () {
        console.log("There are ".concat(this.requestQueue.size(), " book requests in the queue."));
    };
    return Library;
}());
var universityLibrary = new Library();
universityLibrary.requestBook("Alice", "Introduction to TypeScript");
universityLibrary.requestBook("Bob", "Advanced JavaScript");
universityLibrary.requestBook("Charlie", "Data Structures in C++");
universityLibrary.viewNextRequest();
universityLibrary.processRequest();
universityLibrary.processRequest();
universityLibrary.viewNextRequest();
universityLibrary.processRequest();
universityLibrary.viewQueueSize();
