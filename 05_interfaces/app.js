;
//function greet_person(person: {name: string}) {
function greet_person(person) {
    console.log("hello " + person.name);
}
//function changeName(person: {name: string}){
function changeName(person) {
    person.name = "phil";
}
var person_to_greet = {
    name: "bob",
    age: 32
};
greet_person(person_to_greet);
changeName(person_to_greet);
greet_person(person_to_greet);
function greet_person_optional(person) {
    console.log("hello " + person.name);
}
var person_optional_age = {
    name: "tony",
    colour: ["blue", "yellow"] // will be matched to "propname"
};
greet_person_optional({ name: "ted", age: 43 });
greet_person_optional(person_optional_age);
;
var person_with_greet = {
    name: "john",
    age: 45,
    greet: function (lastname) {
        console.log(this.name, lastname); // don't forget "this"
    }
};
person_with_greet.greet("jones");
// ***** classes and interfaces *****
var PersonClass = (function () {
    function PersonClass() {
    }
    PersonClass.prototype.greet = function (last) {
        console.log(this.name, name); // don't forget "this"
    };
    return PersonClass;
}());
var myPerson = new PersonClass();
myPerson.name = "allan";
myPerson.name = "stephens";
myPerson.greet(myPerson.name);
var myDoubleFunction;
myDoubleFunction = function (num1, num2) {
    return (num1 + num2) * 2;
};
console.log(myDoubleFunction(10, 20));
// must have all the properties from AgedPerson as well as NamedPerson2
var oldPerson = {
    age: 89,
    name: "steve"
};
console.log(oldPerson);
