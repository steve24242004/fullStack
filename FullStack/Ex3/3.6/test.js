"use strict";
class RailwayReservation {
    constructor() {
        this.waitlist = [];
    }
    // Add a passenger to the waitlist (push to stack)
    addToWaitlist(passenger) {
        if (!passenger.trim()) {
            console.log("Invalid name! Passenger name cannot be empty.");
            return;
        }
        this.waitlist.push(passenger);
        console.log(`${passenger} has been added to the waitlist.`);
    }
    // Assign an available seat to the last passenger in the waitlist (pop from stack)
    assignSeat() {
        if (this.waitlist.length === 0) {
            console.log("No passengers in the waitlist.");
            return;
        }
        const assignedPassenger = this.waitlist.pop();
        console.log(`Seat assigned to ${assignedPassenger}.`);
    }
    // Display current waitlist
    showWaitlist() {
        if (this.waitlist.length === 0) {
            console.log("The waitlist is currently empty.");
            return;
        }
        console.log("Current Waitlist (Last added appears first):");
        for (let i = this.waitlist.length - 1; i >= 0; i--) {
            console.log(`${i + 1}. ${this.waitlist[i]}`);
        }
    }
}
// Example usage:
const reservationSystem = new RailwayReservation();
reservationSystem.addToWaitlist("Alice");
reservationSystem.addToWaitlist("Bob");
reservationSystem.addToWaitlist("Charlie");
reservationSystem.showWaitlist(); // Displays waitlist in LIFO order
reservationSystem.assignSeat(); // Assigns seat to Charlie (Last In)
reservationSystem.assignSeat(); // Assigns seat to Bob
reservationSystem.assignSeat(); // Assigns seat to Alice
reservationSystem.assignSeat(); // No passengers left
