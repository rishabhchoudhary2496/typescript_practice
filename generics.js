"use strict";
//generics handle multiple types
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addUid = function (obj) {
    var uid = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { uid: uid });
};
var peson = addUid({ age: 53 });
console.log(peson.age);
var lastElement = function (array) {
    return [array.length - 1];
};
console.log(['hey', 'ther', 'you']);
console.log([1, 2, 3]);
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
console.log(makeFullName({ firstName: 'ramesh', lastName: 'suresh', age: 34 }));
