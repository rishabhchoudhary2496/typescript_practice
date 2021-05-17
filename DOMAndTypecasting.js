"use strict";
var a = document.querySelector('a'); //not reutnring null ! in typescript
console.log('a', a.tagName);
//explicit type casting to HTMLFormElement
var form = document.querySelector('#formi');
console.log('from', form.children);
var types = document.querySelector('#num1');
console.log('types', types);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit', types.valueAsNumber);
});
