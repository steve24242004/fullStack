"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var Customer_1 = require("./Customer");
var ShoppingCart_1 = require("./ShoppingCart");
var product1 = new Product_1.Product(1, "Laptop", 60000);
var product2 = new Product_1.Product(2, "Mouse", 1000);
var customer = new Customer_1.Customer(1, "Alice");
var cart = new ShoppingCart_1.ECommerceSystem.ShoppingCart(customer);
cart.addItem(product1);
cart.addItem(product2);
cart.checkout();
