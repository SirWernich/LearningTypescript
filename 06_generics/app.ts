// simple generic

function echo(data: any) {
	return data;
}

console.log(echo("hello"));
console.log(echo(321));
console.log(echo({name: "bob", age: 43}));

// you pass in string, you get a string back and can call string functions on the returned item
// but you can't use the same functions with number or object.


// generic function, same syntax as in c#

function echoGeneric<T>(data: T) {
	return data;
}

console.log(echoGeneric("hello").charAt(2));
console.log(echoGeneric(321).toFixed(2));	
console.log(echoGeneric<number>(321));	// explicitly tell it the type
//console.log(echoGeneric<string>(321));	// error!
console.log(echoGeneric({name: "bob", age: 43}).age);


// built-in generics: array

const testResults: Array<number> = [1.94, 4.23, 1.4, 5.2];

testResults.push(12);
// testResults.push("asdf")		<-- not allowed
// normally arrays accept anything, but if you use a typed array, then it's safer.


// generic types and arrays
function printAll<T>(args: T[]) {
	args.forEach(e => console.log(e));
}

//	printAll<string>(["apples", "pears", 23, 6]);	<--- type of string[]
printAll<string>(["apples", "pears", "banana"]);


// generic types

const echo2: <T> (data: T) => T = echoGeneric;
// creating a new constant, then assigning a type to it.
// EVERYTHING AFTER THE COLON, BUT BEFORE THE EQUALS IS THE TYPE!!!
// generic type, function type accepting type T and which returns type T
// and we assign the "echoGeneric" function to this.

console.log(echo2<string>("sdf"));


// creating a generic class:

class SimpleMath {
	baseValue;
	multiplyValue;
	calculate() {
		return this.baseValue * this.multiplyValue;
	}
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;		// not type-safe, you can give it "donut"
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

// lets make it generic

class SimpleMathGeneric<T> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number{
	//	return this.baseValue * this.multiplyValue;		// typescript recognises that these values might not be able to be used for math
		return +this.baseValue * +this.multiplyValue;		// explicitly cast to number
	}
}

const simpleMathGeneric = new SimpleMath();
simpleMathGeneric.baseValue = 10;		// not type-safe, you can give it "donut"
simpleMathGeneric.multiplyValue = 20;
console.log(simpleMathGeneric.calculate());

simpleMathGeneric.baseValue = "donut";		// no error
console.log(simpleMathGeneric.calculate());	// NaN


// constraints
// by using <T extends [class]>, you can restrict what base types are allowed

// can be of type number or string, assuming the string can be cast to number
class SimpleMathConstrained<T extends number | string> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number{
		return +this.baseValue * +this.multiplyValue;		// explicitly cast to number
	}
}

const constrainedSimpleMath = new SimpleMathConstrained<string>();
constrainedSimpleMath.baseValue = "10";	// <--- error if only extends number
constrainedSimpleMath.multiplyValue = "12";	// both must be string or number, not mixed
console.log(constrainedSimpleMath.calculate());

// multiple generic types

// can be of type number or string, assuming the string can be cast to number
/*
	variations:

	class SimpleMathMultipleConstrained<T, U extends number | string>
	- T can be anything, U must be number or string

	class SimpleMathMultipleConstrained<T extends number | string, U extends number | string>
	- U can be number or string, T can be number or string

	class SimpleMathMultipleConstrained<T extends U, U extends number | string>
	- U can be number or string, but T must be the same as U

*/


class SimpleMathMultipleConstrained<T, U extends number | string> {
	baseValue: T;
	multiplyValue: U;
	calculate(): number{
		return +this.baseValue * +this.multiplyValue;		// explicitly cast to number
	}
}

const simpleMathMultipleConstrained = new SimpleMathMultipleConstrained<string, number>();
simpleMathMultipleConstrained.baseValue = "10";
simpleMathMultipleConstrained.multiplyValue = 12;
console.log(simpleMathMultipleConstrained.calculate());



// exercise:

class MyMap<T> {
	private _map: {[key: string]: T} = {};

	setItem(key: string, value: T) {
		this._map[key] = value;
	}

	getItem(key: string): T {
		return this._map[key];
	}

	printMap() {
		console.log(this._map);
	}

	clear() {
		for (let key of Object.keys(this._map)) 
			delete this._map[key];
	}
}

const numberMap = new MyMap<number>();
numberMap.printMap();
numberMap.setItem("apples", 23);
numberMap.setItem("bananas", 12);
//numberMap.setItem("pears", "yum");	<-- error
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();


const stringMap = new MyMap<string>();
stringMap.printMap();
stringMap.setItem("yellow", "banana");
stringMap.setItem("green", "bean");
console.log(stringMap.getItem("yellow"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();









