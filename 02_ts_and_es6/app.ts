// let and const
console.log("*** let and const ***");

var variable = 12;	// global scope
let variable2 = 34;	// scope is contained in block

console.log(variable);
console.log(variable2);

const maxLevels = 12;
// maxLevels = 123;	// can't do this.


// block scope
console.log("*** block scope (let) ***");

function test() {
	let variable = null;
	console.log("inside test(): ", variable);	// null
	variable = 98;
	console.log("inside test(): ", variable);	// null
}

test();

console.log("outside test(): ", variable);	// undefined

// arrow functions
console.log("*** arrow functions ***");

// one line doesn't need "return"
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;

console.log(multiplyNumbers(9,19));

// no args
const greet = () => console.log("hello!");
greet();

// it's better to specify the type
const greetFriend = friend => console.log("hello " + friend);
greetFriend("bob");


// functions and default parameters
console.log("*** functions and default params ***");

const countdown = (start: number = 10) : void => {
	while (start) {
		start--;
	}
	console.log(start);
};

countdown(10);
countdown();	// no default param in declaration error on compile, expecting parameter


// the rest spread operator
console.log("*** rest and spread operator ***");

const numbers = [1,10,52,72];
// console.log(Math.max(numbers));	<-- doesn't work
console.log(Math.max(...numbers));

function makeArray(...args: number[]): number[] {
	return args;
}
console.log(makeArray(83,58,29,4,3,26,15));


// destructuring arrays
console.log("*** destructuring arrays ***");

const myhobbies = ["eating", "sports", "baking"];
console.log(myhobbies[0]);
console.log(myhobbies[1]);
console.log(myhobbies[2]);

// or you can destructure:
const [hobby1, hobby2, hobby3] = myhobbies;
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);





















