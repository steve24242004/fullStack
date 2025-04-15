import { Product } from "./Product";
import { Customer } from "./Customer";
import { Order } from "./Order";

export namespace ECommerceSystem {
  export class ShoppingCart {
    private items: Product[] = [];

    constructor(private customer: Customer) {}

    addItem(product: Product): void {
      this.items.push(product);
      console.log(`${product.name} added to cart.`);
    }

    checkout(): void {
      const order = new Order(this.customer, this.items);
      order.displayOrder();
      this.items = [];
    }
  }
}
