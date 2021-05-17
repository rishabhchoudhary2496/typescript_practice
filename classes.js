var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Enemy = /** @class */ (function () {
    function Enemy(hp, mp, level, type) {
        this.hp = hp;
        this.mp = mp;
        this.level = level;
        this.type = type;
    }
    Enemy.prototype.heal = function () {
        this.hp += 5;
        this.mp += 5;
        console.log("HP " + this.hp + " and MP " + this.mp + " after healing");
    };
    Enemy.prototype.damage = function () {
        this.hp -= 5;
        this.mp -= 5;
        console.log("HP " + this.hp + " and MP " + this.mp + " after taking damage");
    };
    return Enemy;
}());
export { Enemy };
var darkElf = new Enemy(100, 60, 5, 'dark elf');
var enmiesList = [darkElf];
console.log(darkElf.damage());
console.log(darkElf.heal());
//readonly on read only in inside or outside
//private accesable in inside not outside
//abstract classes typescript
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.prototype.deposit = function (amout) { };
    Transaction.prototype.withdraw = function (amount) { };
    Transaction.prototype.returnStatement = function () { };
    return Transaction;
}());
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bank;
}(Transaction));
var newBank = new Bank();
newBank.deposit(100);
