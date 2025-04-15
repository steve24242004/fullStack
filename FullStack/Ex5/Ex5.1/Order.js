"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(customer, items) {
        this.customer = customer;
        this.items = items;
    }
    Order.prototype.displayOrder = function () {
        console.log("Order placed by: ".concat(this.customer.name));
        var total = 0;
        this.items.forEach(function (item) {
            console.log("- ".concat(item.name, ": \u20B9").concat(item.price));
            total += item.price;
        });
        console.log("Total: \u20B9".concat(total));
    };
    return Order;
}());
exports.Order = Order;
