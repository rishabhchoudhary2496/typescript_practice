import { randomInt } from './random';
console.log(randomInt());
var userInput;
var username;
//unknown typ
userInput = 6;
userInput = 'hello';
//unknown more type safe can assign to any type
//can acess any methods on it
if (typeof userInput === 'string') {
    userInput.trim();
}
//arays in typescript
var superHeroes = ['batman', 'superman', 'wonder womand'];
//enumns
var STROKE_SIZE;
(function (STROKE_SIZE) {
    STROKE_SIZE[STROKE_SIZE["SMALL"] = 0] = "SMALL";
    STROKE_SIZE[STROKE_SIZE["MEDIUM"] = 1] = "MEDIUM";
    STROKE_SIZE[STROKE_SIZE["BIG"] = 2] = "BIG";
})(STROKE_SIZE || (STROKE_SIZE = {}));
//defining objects in typescript
var student = {
    firstName: 'mahesh',
    lastName: 'kumar',
    class: 7,
};
//Object types
//function types tells to store a function and its return type
//combine value should hold a function with this signature
var combineValue;
//functions types and callback
function computeAndGreet(cb) {
    cb('hello');
}
computeAndGreet(console.log);
