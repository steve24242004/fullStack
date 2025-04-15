import { Product } from "./Product";
import { Customer } from "./Customer";
import { ECommerceSystem } from "./ShoppingCart";

const product1 = new Product(1, "Laptop", 60000);
const product2 = new Product(2, "Mouse", 1000);
const customer = new Customer(1, "Alice");

const cart = new ECommerceSystem.ShoppingCart(customer);
cart.addItem(product1);
cart.addItem(product2);
cart.checkout();
