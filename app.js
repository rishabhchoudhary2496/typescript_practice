"use strict";
//class decorators in typescript
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// property decorators
// function Emoji() {
//   return function (target: object, key: string) {
//     let val = target[key]
//     const getter = () => {
//       return val
//     }
//     const setter = (next: string) => {
//       console.log('updating flavor...')
//       val = `🍦 ${next} 🍦`
//     }
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true,
//     })
//   }
// }
// class IceCream implements IceCreamInterface {
//   @Emoji()
//   flavour = 'vanilla'
// }
// const motherdairy = new IceCream()
// console.log(motherdairy.flavour)
//method decorators
// Method Decorator
function Confirmable(message) {
    return function (target, key, descriptor) {
        var original = descriptor.value;
        console.log('original', original);
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var allow = confirm(message);
            if (allow) {
                var result_1 = original.apply(this, args);
                return result_1;
            }
            else {
                return null;
            }
        };
        return descriptor;
    };
}
var IceCreamComponent = /** @class */ (function () {
    function IceCreamComponent() {
        this.toppings = [];
    }
    IceCreamComponent.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    __decorate([
        Confirmable('Are you sure?'),
        Confirmable('Are you super, super sure? There is no going back!')
    ], IceCreamComponent.prototype, "addTopping", null);
    return IceCreamComponent;
}());
var i = new IceCreamComponent();
i.addTopping('chocolate syrup');
