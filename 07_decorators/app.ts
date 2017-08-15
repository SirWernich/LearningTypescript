// funcs attached to classes, methods, props, and work with/transform them.
// it's sort of "meta-programming". they give you the chance to extend a class and
// add extra functionality by adding a little doodad to it.

// class decorator: one arg
function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged
class PersonDecorated {
	constructor() {
		console.log("contructed!");
	}
}


// decorator factories
function logging(value: boolean) {
	return value ? logged: null;
}

// not really decorating with "logging", but rather the result of "logging"
@logging(false)
class CarDecorated {
	constructor() {

	}
}


// creating a useful decorator

function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

// you can use multiple decorators, just "stack" them.
@logging(true)
@printable
class PlantDecorated {
	name = "Green plant";
}

const plantDec = new PlantDecorated();
(<any>plantDec).print();		// need to cast to "any" as TS thinks "print" doesn't exist



















