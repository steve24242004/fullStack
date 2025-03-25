"use strict";
// Base Vehicle class
class Vehicle {
    constructor(brand, model, rentalPrice) {
        this.brand = brand;
        this.model = model;
        this.rentalPrice = rentalPrice;
    }
    // Method to display vehicle details
    displayDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Rental Price per day: $${this.rentalPrice}`);
    }
}
// Car subclass
class Car extends Vehicle {
    constructor(brand, model, rentalPrice, numberOfSeats) {
        super(brand, model, rentalPrice);
        this.numberOfSeats = numberOfSeats;
    }
    // Calculate rental cost
    calculateRentalCost(days) {
        return this.rentalPrice * days;
    }
}
// Bike subclass
class Bike extends Vehicle {
    constructor(brand, model, rentalPrice, engineCC) {
        super(brand, model, rentalPrice);
        this.engineCC = engineCC;
    }
    // Calculate rental cost
    calculateRentalCost(days) {
        return this.rentalPrice * days;
    }
}
// Example usage:
const myCar = new Car("Toyota", "Camry", 50, 5);
const myBike = new Bike("Yamaha", "R15", 20, 155);
myCar.displayDetails();
console.log(`Total cost for 5 days: $${myCar.calculateRentalCost(5)}`);
myBike.displayDetails();
console.log(`Total cost for 3 days: $${myBike.calculateRentalCost(3)}`);
