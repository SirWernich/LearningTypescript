// simple generic
function echo(data) {
    return data;
}
console.log(echo("hello"));
console.log(echo(321));
console.log(echo({ name: "bob", age: 43 }));
// you pass in string, you get a string back and can call string functions on the returned item
// but you can't use the same functions with number or object.
// generic function, same syntax as in c#
function echoGeneric(data) {
    return data;
}
console.log(echoGeneric("hello").charAt(2));
console.log(echoGeneric(321).toFixed(2));
console.log(echoGeneric(321)); // explicitly tell it the type
//console.log(echoGeneric<string>(321));	// error!
console.log(echoGeneric({ name: "bob", age: 43 }).age);
// built-in generics: array
var testResults = [1.94, 4.23, 1.4, 5.2];
testResults.push(12);
// testResults.push("asdf")		<-- not allowed
// normally arrays accept anything, but if you use a typed array, then it's safer.
// generic types and arrays
function printAll(args) {
    args.forEach(function (e) { return console.log(e); });
}
//	printAll<string>(["apples", "pears", 23, 6]);	<--- type of string[]
printAll(["apples", "pears", "banana"]);
// generic types
var echo2 = echoGeneric;
// creating a new constant, then assigning a type to it.
// EVERYTHING AFTER THE COLON, BUT BEFORE THE EQUALS IS THE TYPE!!!
// generic type, function type accepting type T and which returns type T
// and we assign the "echoGeneric" function to this.
console.log(echo2("sdf"));
// creating a generic class:
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10; // not type-safe, you can give it "donut"
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
// lets make it generic
var SimpleMathGeneric = (function () {
    function SimpleMathGeneric() {
    }
    SimpleMathGeneric.prototype.calculate = function () {
        //	return this.baseValue * this.multiplyValue;		// typescript recognises that these values might not be able to be used for math
        return +this.baseValue * +this.multiplyValue; // explicitly cast to number
    };
    return SimpleMathGeneric;
}());
var simpleMathGeneric = new SimpleMath();
simpleMathGeneric.baseValue = 10; // not type-safe, you can give it "donut"
simpleMathGeneric.multiplyValue = 20;
console.log(simpleMathGeneric.calculate());
simpleMathGeneric.baseValue = "donut"; // no error
console.log(simpleMathGeneric.calculate()); // NaN
// constraints
// by using <T extends [class]>, you can restrict what base types are allowed
// can be of type number or string, assuming the string can be cast to number
var SimpleMathConstrained = (function () {
    function SimpleMathConstrained() {
    }
    SimpleMathConstrained.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // explicitly cast to number
    };
    return SimpleMathConstrained;
}());
var constrainedSimpleMath = new SimpleMathConstrained();
constrainedSimpleMath.baseValue = "10"; // <--- error if only extends number
constrainedSimpleMath.multiplyValue = "12"; // both must be string or number, not mixed
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
var SimpleMathMultipleConstrained = (function () {
    function SimpleMathMultipleConstrained() {
    }
    SimpleMathMultipleConstrained.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // explicitly cast to number
    };
    return SimpleMathMultipleConstrained;
}());
var simpleMathMultipleConstrained = new SimpleMathMultipleConstrained();
simpleMathMultipleConstrained.baseValue = "10";
simpleMathMultipleConstrained.multiplyValue = 12;
console.log(simpleMathMultipleConstrained.calculate());
// exercise:
var MyMap = (function () {
    function MyMap() {
        this._map = {};
    }
    MyMap.prototype.setItem = function (key, value) {
        this._map[key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this._map[key];
    };
    MyMap.prototype.printMap = function () {
        console.log(this._map);
    };
    MyMap.prototype.clear = function () {
        for (var _i = 0, _a = Object.keys(this._map); _i < _a.length; _i++) {
            var key = _a[_i];
            delete this._map[key];
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.printMap();
numberMap.setItem("apples", 23);
numberMap.setItem("bananas", 12);
//numberMap.setItem("pears", "yum");	<-- error
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.printMap();
stringMap.setItem("yellow", "banana");
stringMap.setItem("green", "bean");
console.log(stringMap.getItem("yellow"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
