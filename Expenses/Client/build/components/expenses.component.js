"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Bill = (function () {
    function Bill(id, description, amount) {
        this.id = id;
        this.description = description;
        this.amount = amount;
    }
    ;
    return Bill;
}());
var ExpensesComponent = (function () {
    function ExpensesComponent() {
        this.bills = [
            new Bill(1, "Coffee", 8),
            new Bill(2, "Breakfast", 10),
            new Bill(3, "Umbrella  ", 35),
            new Bill(4, "Salad", 6),
            new Bill(5, "Petrol", 52)
        ];
    }
    ExpensesComponent.prototype.getTotal = function () {
        return 50;
    };
    ExpensesComponent = __decorate([
        core_1.Component({
            selector: 'expenses',
            template: "\n    <h1> Expenses </h1>\n    <table class=\"table\">\n        <thead>\n        <tr>\n            <th>Id</th>\n            <th>Description</th>\n            <th>Amount</th>\n        </tr>\n        </thead>\n        <tr  *ngFor=\"let bill of bills\">\n            <td>{{bill.id}}</td>\n            <td>{{bill.description}}</td>\n            <td>{{bill.amount}}</td>\n        </tr>\n    </table>\n\n    <span class=\"big\">\n        <h3>{{getTotal()}} in total </h3>\n    </span>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ExpensesComponent);
    return ExpensesComponent;
}());
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=expenses.component.js.map