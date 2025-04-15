import { Product } from "./Product";
import { Customer } from "./Customer";

export class Order {
  constructor(public customer: Customer, public items: Product[]) {}

  displayOrder(): void {
    console.log(`Order placed by: ${this.customer.name}`);
    let total = 0;
    this.items.forEach(item => {
      console.log(`- ${item.name}: ₹${item.price}`);
      total += item.price;
    });
    console.log(`Total: ₹${total}`);
  }
}
