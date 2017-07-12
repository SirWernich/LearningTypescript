// string
var myName = "max";
// myName = 20;	<-- can't do this, because TS picks up the type.
// number
var myAge = 32;
// myAge = "sdf";
myAge = 23.23; // this works; type "number"
// boolean
var hasHobbies = true;
// hasHobbies = 1;	<-- doesn't work, doesn't do "truthy/falsy"
var myRealAge; // declaration without assignment = type "any"
myRealAge = "Sdf"; // now type string.
// above types are inferred.
// below is explicit types:
var myTypedAge;
// myTypedAge = "sd";	<-- this doesn't work anymore
var hobbies = ["cooking", "Eating"];
console.log(hobbies[0]);
console.log(typeof hobbies);
// hobbies = [100];	<-- array of numbers can't hold numbers
var myAnyTypeArray = ["string", "Another string"];
myAnyTypeArray = [100];
// tuples
var address = ["street lane", 45];
address = ["townsville", 234]; // all good
// address = [1234, "penny lane"];	// no good
// enums
var Colour;
(function (Colour) {
    Colour[Colour["red"] = 0] = "red";
    Colour[Colour["green"] = 1] = "green";
    Colour[Colour["blue"] = 2] = "blue";
    Colour[Colour["pink"] = 120] = "pink";
    Colour[Colour["yellow"] = 121] = "yellow"; //121	<-- continues from last value
})(Colour || (Colour = {}));
var myColour = Colour.green;
console.log(myColour);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName);
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
// console.log(multiply(10, "bob"));	<-- doesn't work, wrong type
console.log(multiply(10, 8));
// function types
var myMultiply; // type any
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
myMultiply(12, 12);
// type-ing your functions so you can't assign functions to variables that have
// different number of parameters and return different types.
// type of "myTypedMultiply" is a function that takes two params of type number
// and reteurns a number
var myTypedMultiply;
// myTypedMultiply = sayHello;	<-- doesn't work
myTypedMultiply = myMultiply;
// objects
var userData = {
    name: "bob",
    age: 23
};
/*
userData = {
    car: "merc",	<-- doesn't work. type object(string, int) and property names
    milage: 324	    are important
};
*/
userData = {
    age: 23,
    name: "steve"
};
// defining the object's types
var anotherUser = {
    name: "alan",
    age: 87
};
// complex object
var complex = {
    data: [1, 2, 3, 4],
    output: function (all) {
        return this.data;
    }
};
// instead of duplicating like this:
var complex2 = {
    data: [10, 11, 12, 13],
    output: function (all) {
        return this.data;
    }
};
var complex3 = {
    data: [10, 11, 12, 13],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27; // instead of "any" (can chain more than two)
myRealRealAge = "27";
// myRealRealAge = true;	<-- doesn't work
// check types
var finalValue = "a string";
if (typeof finalValue == "string")
    console.log("it's a string");
// never type
// this function never completes, it throws an error.
function neverReturns() {
    throw new Error("an error!");
}
// nullable types
var canBeNull = 12;
//canBeNull = null;	// can't do this
var canAlsoBeNull; // undefined
canAlsoBeNull = null;
// enable "strictNullChecks" in the tsconfig file
// stops you from assigning null to values that shouldn't be null
// if you still want to use nullable:
var canBeNullValue = 12;
canBeNullValue = null;
var nullType = null; // type "null", not "any"
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "bob",
    bankAccount: bankAccount,
    hobbies: ["food", "sport"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
