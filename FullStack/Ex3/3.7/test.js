"use strict";
// Node class for each order in the linked list
class OrderNode {
    constructor(orderID, customerName) {
        this.orderID = orderID;
        this.customerName = customerName;
        this.next = null;
    }
}
// Linked List class to manage orders dynamically
class OrderQueue {
    constructor() {
        this.front = this.rear = null;
    }
    // Add a new order to the queue (FIFO - Enqueue)
    addOrder(orderID, customerName) {
        const newOrder = new OrderNode(orderID, customerName);
        if (!this.rear) {
            this.front = this.rear = newOrder;
        }
        else {
            this.rear.next = newOrder;
            this.rear = newOrder;
        }
        console.log(`Order ${orderID} placed by ${customerName}.`);
    }
    // Process the first order in the queue (FIFO - Dequeue)
    processOrder() {
        if (!this.front) {
            console.log("No pending orders to process.");
            return;
        }
        const processedOrder = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        console.log(`Order ${processedOrder.orderID} for ${processedOrder.customerName} processed.`);
    }
    // Display all pending orders
    showPendingOrders() {
        if (!this.front) {
            console.log("No pending orders.");
            return;
        }
        console.log("Pending Orders:");
        let current = this.front;
        while (current) {
            console.log(`Order ${current.orderID} - ${current.customerName}`);
            current = current.next;
        }
    }
}
// Example usage:
const orderSystem = new OrderQueue();
orderSystem.addOrder(101, "Alice");
orderSystem.addOrder(102, "Bob");
orderSystem.addOrder(103, "Charlie");
orderSystem.showPendingOrders(); // Displays all pending orders
orderSystem.processOrder(); // Processes Alice's order (FIFO)
orderSystem.processOrder(); // Processes Bob's order
orderSystem.processOrder(); // Processes Charlie's order
orderSystem.processOrder(); // No orders left
