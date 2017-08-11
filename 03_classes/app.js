var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    // second one is creating and assigning as soon as you instantiate class
    function Person(name, username) {
        this.username = username;
        this.age = 26; // only accessible in this class and subclasses
        this.name = name;
    }
    // methods can be private, public or protected too
    Person.prototype.printAge = function () {
        console.log(this.age); // inside the class, so can access this property
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("bob", "thebob");
console.log(person.name);
console.log(person.username);
person.printAge();
person.setType("banana");
// inheritence
var Wernich = (function (_super) {
    __extends(Wernich, _super);
    function Wernich(user) {
        var _this = _super.call(this, name, user) || this;
        _this.name = "Wernich"; // overwrites property in parent class 
        _this.age = 123;
        return _this;
    }
    return Wernich;
}(Person));
var wer = new Wernich("billybob");
console.log(wer);
// getters and setters
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length >= 3)
                this._species = value;
            else
                this._species = "Default";
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);
// static properties and methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumferenc = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14; // don't need to instantiate class
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumferenc(8));
// abstract classes -> can't instantiate, must inherit from
var Project = (function () {
    function Project() {
        this.projectName = "Default project";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var myProject = new ITProject();
myProject.budget = 123;
console.log(myProject.calcBudget());
console.log(myProject);
myProject.changeName("banana");
console.log(myProject);
// private constructors
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne("the only one");	<-- not allowed to instantiate this way
var right = OnlyOne.getInstance();
// readonly properties
// you can set name in OnlyOne becuse it's public. you can restrict access by only 
// creating a setter.
// you can also set it as redonly.
var OnlyOneReadonly = (function () {
    function OnlyOneReadonly(name) {
        this.name = name;
    }
    OnlyOneReadonly.getInstance = function () {
        if (!OnlyOneReadonly.instance) {
            OnlyOneReadonly.instance = new OnlyOneReadonly("The Only One");
        }
        return OnlyOneReadonly.instance;
    };
    return OnlyOneReadonly;
}());
var theOnlyRO = OnlyOneReadonly.getInstance();
// theOnlyRO.name = "blah";	<-- can't assign to readonly variable
console.log(theOnlyRO);
// exercise:
console.log(" ******** exercise ******** ");
console.log("--- 1 ---");
// 1:
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("tooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// 2:
console.log("--- 2 ---");
var BaseObject = (function () {
    function BaseObject(w, l) {
        this.width = w;
        this.length = l;
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(w, l) {
        return _super.call(this, l, w) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(2, 5);
console.log(rectangle.calcSize());
// 3:
console.log("--- 3 ---");
var APerson = (function () {
    function APerson() {
        this._firstname = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(APerson.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value.length > 3 ? value : "";
        },
        enumerable: true,
        configurable: true
    });
    return APerson;
}());
var thisPerson = new APerson();
console.log(thisPerson.firstname);
thisPerson.firstname = "bob";
console.log(thisPerson.firstname);
thisPerson.firstname = "bobby";
console.log(thisPerson.firstname);
