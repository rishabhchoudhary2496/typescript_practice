"use strict";
var me = {
    name: 'shawn',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('i spent', amount);
        return amount;
    },
};
var greeting = function (person) {
    console.log('hello', person.name);
};
console.log(greeting(me));
