"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceSystem = void 0;
var Order_1 = require("./Order");
var ECommerceSystem;
(function (ECommerceSystem) {
    var ShoppingCart = /** @class */ (function () {
        function ShoppingCart(customer) {
            this.customer = customer;
            this.items = [];
        }
        ShoppingCart.prototype.addItem = function (product) {
            this.items.push(product);
            console.log("".concat(product.name, " added to cart."));
        };
        ShoppingCart.prototype.checkout = function () {
            var order = new Order_1.Order(this.customer, this.items);
            order.displayOrder();
            this.items = [];
        };
        return ShoppingCart;
    }());
    ECommerceSystem.ShoppingCart = ShoppingCart;
})(ECommerceSystem || (exports.ECommerceSystem = ECommerceSystem = {}));
