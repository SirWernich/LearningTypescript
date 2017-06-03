// string
let myName = "steve";
// myName = 20;	<-- can't do this, because TS picks up the type.

// number
let myAge = 32;
// myAge = "sdf";
myAge = 23.23;	// this works; type "number"

// boolean
let hasHobbies = true;
// hasHobbies = 1;	<-- doesn't work, doesn't do "truthy/falsy"

let myRealAge;		// declaration without assignment = type "any"
myRealAge = "Sdf";	// now type string.

// above types are inferred.
// below is explicit types:

let myTypedAge : number;
// myTypedAge = "sd";	<-- this doesn't work anymore

let hobbies = ["cooking", "Eating"];

console.log(hobbies[0]);
console.log(typeof hobbies);

// hobbies = [100];	<-- array of numbers can't hold numbers

let myAnyTypeArray : any[] = ["string", "Another string"];
myAnyTypeArray = [100];

// tuples

let address : [string, number] = ["street lane", 45];
address = ["townsville", 234];	// all good
// address = [1234, "penny lane"];	// no good

// enums

enum Colour {
	red,
	green,
	blue
}

let myColour : Colour = Colour.green;
console.log(myColour);


// any
let car : any = "BMW";	// lets you use dynamic typing -> use sparingly
console.log(car);
car = {make : "Mercedes", age: 4};
console.log(car);




// functions
function returnMyName()  : string {		// returns a string
	return myName;
}

console.log(returnMyName());


// void 
function sayHello() : void {
	console.log("hello!");
	// return 0;	<-- can't return something from void function
}

// args
function myFunc(myInt :number, myStr: string) {
	console.log(myInt, myStr);
}