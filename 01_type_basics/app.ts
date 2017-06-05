// string
let myName = "max";
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
	red,	// 0
	green,	// 1
	blue,	// 2
	pink = 120,	// 120
	yellow	//121	<-- continues from last value
}

let myColour : Colour = Colour.green;
console.log(myColour);

// functions

function returnMyName(): string {
	return myName;
}
console.log(returnMyName);

// void

function sayHello() : void {
	console.log("Hello!");
}

// argument types

function multiply(val1 : number, val2 : number ) : number {
	return val1 * val2;
}

// console.log(multiply(10, "bob"));	<-- doesn't work, wrong type
console.log(multiply(10, 8));

// function types

let myMultiply;	// type any
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
myMultiply(12,12);

// type-ing your functions so you can't assign functions to variables that have
// different number of parameters and return different types.

// type of "myTypedMultiply" is a function that takes two params of type number
// and reteurns a number
let myTypedMultiply: (v1: number, v2: number) => number;

// myTypedMultiply = sayHello;	<-- doesn't work
myTypedMultiply = myMultiply;


// objects

let userData = {
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
	age: 23,	// order doesn't matter
	name: "steve"
};

// defining the object's types
let anotherUser : {name: string, age: number} = {
	name : "alan",
	age: 87
};


let complex: {data: number[], output: (all: boolean) => number[]} = {
	data: [1,2,3,4],
	output: function(all: boolean): number[] {
		return this.data;
	}
};