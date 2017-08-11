/*
	interfaces are only there for dev time, and don't get compiled. TS uses them to check the 
	types during dev, so it doesn't compile them to JS.
*/


interface NamedPerson {
	name: string;
};

//function greet_person(person: {name: string}) {
function greet_person(person: NamedPerson) {
	console.log("hello " + person.name);
}

//function changeName(person: {name: string}){
function changeName(person: NamedPerson){
	person.name = "phil";
}

const person_to_greet = {
	name: "bob",
	age: 32
}

greet_person(person_to_greet);
changeName(person_to_greet);
greet_person(person_to_greet);


// interfaces and properties

// same structure as the object defined above, but doesn't work:
// greet_person({name: "ted", age: 43});	--> " Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'."

// because an object literal passed like this to a function must only have the same fields as the interface. 
// it's checking is done much more strictly. to prevent this error, create interfaces and don't pass object literals 
// directly to functions.

// ***** interfaces and properties *****

interface NamedPerson2 {
	name: string;
	age?: number;	// age is now optional, so you can supply an age or not
	[propName: string]: any;		// if you don't know the properties:
}

function greet_person_optional(person: NamedPerson2) {
	console.log("hello " + person.name);
}
const person_optional_age: NamedPerson2 = {
	name: "tony",
	colour: ["blue", "yellow"]		// will be matched to "propname"
}

greet_person_optional({name: "ted", age: 43});
greet_person_optional(person_optional_age);


// ***** interfaces and methods *****

interface PersonWithMethod {
	name: string;					// property
	age: number;					// property
	greet(lastname: string) : void;	// method
};

const person_with_greet: PersonWithMethod = {
	name: "john",
	age: 45,
	greet(lastname: string) {
		console.log(this.name, lastname);	// don't forget "this"
	}
};

person_with_greet.greet("jones");


// ***** classes and interfaces *****

class PersonClass implements PersonWithMethod {
	name: string;
	lastName: string;
	age: number;
	greet(last: string) {
		console.log(this.name, name);	// don't forget "this"
	}
}


const myPerson = new PersonClass();
myPerson.name = "allan";
myPerson.name = "stephens";
myPerson.greet(myPerson.name);




// ***** interfaces and function types *****


// whatever function uses this interface must be of this type
interface DoubleValueFunc {
	(number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(num1: number, num2: number): number {
	return (num1 + num2) * 2;
}

console.log(myDoubleFunction(10,20));

/*	not matching thje signature
let myNotDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(val1: string, num1: number): number {
	return (num1) * 2;
}
*/



// ***** interface inheritance *****

interface AgedPerson extends NamedPerson2 {
	age: number;
}

// must have all the properties from AgedPerson as well as NamedPerson2
const oldPerson: AgedPerson = {
	age: 89,
	name: "steve"
};

console.log(oldPerson);