"use strict";
// string
var myName = "steve";
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
})(Colour || (Colour = {}));
var myColour = Colour.green;
console.log(myColour);
// any
var car = "BMW"; // lets you use dynamic typing -> use sparingly
console.log(car);
car = { make: "Mercedes", age: 4 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
