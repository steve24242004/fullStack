"use strict";
// Base Employee class
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.salary = 0; // Default salary, will be set in derived classes
    }
    // Method to display employee details
    displayDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary.toFixed(2)}`);
    }
}
// Full-Time Employee Class
class FullTimeEmployee extends Employee {
    constructor(name, id, monthlySalary) {
        super(name, id);
        this.monthlySalary = monthlySalary;
        this.salary = this.monthlySalary;
    }
}
// Part-Time Employee Class
class PartTimeEmployee extends Employee {
    constructor(name, id, hourlyRate, hoursWorked) {
        super(name, id);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
        this.salary = this.calculateSalary();
    }
    // Calculate salary based on hours worked
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
// Example usage:
const fullTimeEmp = new FullTimeEmployee("Alice Johnson", 101, 5000);
const partTimeEmp = new PartTimeEmployee("Bob Smith", 102, 20, 80);
fullTimeEmp.displayDetails(); // Fixed monthly salary
partTimeEmp.displayDetails(); // Salary based on hourly wages
