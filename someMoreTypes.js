"use strict";
// const person: {name:string,age:number} = {
//     name: 'Ricky',
//     age:28
// }
var person = {
    name: 'Ricky',
    age: 28,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
// person.role[0] = 'hello'
person.role.push(10);
var favActivity;
favActivity = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var COLORS;
(function (COLORS) {
    COLORS[COLORS["RED"] = 0] = "RED";
    COLORS[COLORS["BLUE"] = 1] = "BLUE";
})(COLORS || (COLORS = {}));
console.log(COLORS.BLUE);
//tuple types
console.log(person.name);
