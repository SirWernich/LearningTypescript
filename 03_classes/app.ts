class Person {
	public name: string;	// always accessible
	private type: string;	// only accessible in this class
	protected age: number = 26;	// only accessible in this class and subclasses

	// second one is creating and assigning as soon as you instantiate class
	constructor(name: string, public username: string) {
		this.name = name;
	}

	// methods can be private, public or protected too
	printAge() {
		console.log(this.age);	// inside the class, so can access this property
	}

	setType(type: string) {
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
	name = "Wernich";	// overwrites property in parent class 

	constructor(user: string) {
		super(name, user);	// you MUST do this, so it inits the superclass
		this.age = 123;
	}
}

const wer = new Wernich("billybob");
console.log(wer);

// getters and setters

class Plant {
	private _species: string = "Default";
	
	get species() {
		return this._species;
	}

	set species(value: string) {
		if (value.length >= 3)
			this._species = value;
		else
			this._species ="Default";
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
	static PI: number = 3.14;	// don't need to instantiate class
	static calcCircumferenc(diameter: number) : number {
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumferenc(8));


// abstract classes -> can't instantiate, must inherit from

abstract class Project{
	projectName : string = "Default project";
	budget: number;

	abstract changeName(name: string) : void;

	calcBudget() {
		return this.budget * 2;
	}
}

class ITProject extends Project {
	changeName(name: string) : void {
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
	private static instance: OnlyOne;

	private constructor(public name: string) {}

	static getInstance() {
		if (!OnlyOne.instance) {
			OnlyOne.instance = new OnlyOne("The Only One");
		}
		return OnlyOne.instance;
	}
}

// let wrong = new OnlyOne("the only one");	<-- not allowed to instantiate this way
let right = OnlyOne.getInstance();


// readonly properties

// you can set name in OnlyOne becuse it's public. you can restrict access by only 
// creating a setter.
// you can also set it as redonly.

class OnlyOneReadonly {
	private static instance: OnlyOneReadonly;

	private constructor(public readonly name: string) {}

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