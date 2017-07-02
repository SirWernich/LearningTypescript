"use strict";
class Person {
    // second one is creating and assigning as soon as you instantiate class
    constructor(name, username) {
        this.username = username;
        this.age = 26; // only accessible in this class and subclasses
        this.name = name;
    }
    // methods can be private, public or protected too
    printAge() {
        console.log(this.age); // inside the class, so can access this property
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person("bob", "thebob");
console.log(person.name);
console.log(person.username);
person.printAge();
person.setType("banana");
// inheritence
class Wernich extends Person {
    constructor(user) {
        super(name, user); // you MUST do this, so it inits the superclass
        this.name = "Wernich"; // overwrites property in parent class 
        this.age = 123;
    }
}
const wer = new Wernich("billybob");
console.log(wer);
// getters and setters
class Plant {
    constructor() {
        this._species = "Default";
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length >= 3)
            this._species = value;
        else
            this._species = "Default";
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);
// static properties and methods
class Helpers {
    // don't need to instantiate class
    static calcCircumferenc(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.14; // don't need to instantiate class
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumferenc(8));
// abstract classes -> can't instantiate, must inherit from
class Project {
    constructor() {
        this.projectName = "Default project";
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
let myProject = new ITProject();
myProject.budget = 123;
console.log(myProject.calcBudget());
console.log(myProject);
myProject.changeName("banana");
console.log(myProject);
// private constructors
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne("the only one");	<-- not allowed to instantiate this way
let right = OnlyOne.getInstance();
right.name = "DSfg";
// readonly properties
// you can set name in OnlyOne becuse it's public. you can restrict access by only 
// creating a setter.
// you can also set it as redonly.
class OnlyOneReadonly {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOneReadonly.instance) {
            OnlyOneReadonly.instance = new OnlyOneReadonly("The Only One");
        }
        return OnlyOneReadonly.instance;
    }
}
let theOnlyRO = OnlyOneReadonly.getInstance();
theOnlyRO.name = "blah";
console.log(theOnlyRO);
