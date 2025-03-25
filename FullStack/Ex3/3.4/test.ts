class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
      this.items.push(item);
  }

  dequeue(): T | undefined {
      return this.items.shift();
  }

  peek(): T | undefined {
      return this.items[0];
  }

  isEmpty(): boolean {
      return this.items.length === 0;
  }

  size(): number {
      return this.items.length;
  }
}

interface BookRequest {
  studentName: string;
  bookTitle: string;
}

class Library {
  private requestQueue: Queue<BookRequest> = new Queue<BookRequest>();

  requestBook(studentName: string, bookTitle: string): void {
      const bookRequest: BookRequest = { studentName, bookTitle };
      this.requestQueue.enqueue(bookRequest);
  }

  processRequest(): void {
      if (this.requestQueue.isEmpty()) {
          console.log("No book requests in the queue.");
      } else {
          const nextRequest = this.requestQueue.dequeue();
          if (nextRequest) {
              console.log(`The book "${nextRequest.bookTitle}" is now available and assigned to ${nextRequest.studentName}.`);
          }
      }
  }

  viewNextRequest(): void {
      const nextRequest = this.requestQueue.peek();
      if (nextRequest) {
          console.log(`Next request: ${nextRequest.studentName} is waiting for "${nextRequest.bookTitle}".`);
      } else {
          console.log("No requests in the queue.");
      }
  }

  viewQueueSize(): void {
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
