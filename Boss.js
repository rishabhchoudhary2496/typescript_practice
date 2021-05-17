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
import { Enemy } from './classes';
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(hp, mp, level, type, specialAttack) {
        var _this = _super.call(this, hp, mp, level, type) || this;
        _this.specialAttack = specialAttack;
        return _this;
    }
    Boss.prototype.format = function () {
        return 'hello';
    };
    return Boss;
}(Enemy));
var heisenberg = new Boss(2000, 2000, 50, 'boss', 'magentism');
console.log(heisenberg);
