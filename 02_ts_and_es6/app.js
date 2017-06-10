"use strict";
// let and const
console.log("*** let and const ***");
var variable = 12; // global scope
var variable2 = 34; // scope is contained in block
console.log(variable);
console.log(variable2);
var maxLevels = 12;
// maxLevels = 123;	// can't do this.
// block scope
console.log("*** block scope (let) ***");
function test() {
    var variable = null;
    console.log("inside test(): ", variable); // null
    variable = 98;
    console.log("inside test(): ", variable); // null
}
test();
console.log("outside test(): ", variable); // undefined
// arrow functions
console.log("*** arrow functions ***");
// one line doesn't need "return"
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(9, 19));
// no args
var greet = function () { return console.log("hello!"); };
greet();
// it's better to specify the type
var greetFriend = function (friend) { return console.log("hello " + friend); };
greetFriend("bob");
// functions and default parameters
console.log("*** functions and default params ***");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start) {
        start--;
    }
    console.log(start);
};
countdown(10);
countdown(); // no default param in declaration error on compile, expecting parameter
// the rest spread operator
console.log("*** rest and spread operator ***");
var numbers = [1, 10, 52, 72];
// console.log(Math.max(numbers));	<-- doesn't work
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(83, 58, 29, 4, 3, 26, 15));
// destructuring arrays
console.log("*** destructuring arrays ***");
var myhobbies = ["eating", "sports", "baking"];
console.log(myhobbies[0]);
console.log(myhobbies[1]);
console.log(myhobbies[2]);
// or you can destructure:
var hobby1 = myhobbies[0], hobby2 = myhobbies[1], hobby3 = myhobbies[2];
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);
