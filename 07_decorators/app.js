// funcs attached to classes, methods, props, and work with/transform them.
// it's sort of "meta-programming". they give you the chance to extend a class and
// add extra functionality by adding a little doodad to it.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class decorator: one arg
function logged(constructorFn) {
    console.log(constructorFn);
}
var PersonDecorated = (function () {
    function PersonDecorated() {
        console.log("contructed!");
    }
    PersonDecorated = __decorate([
        logged
    ], PersonDecorated);
    return PersonDecorated;
}());
// decorator factories
function logging(value) {
    return value ? logged : null;
}
// not really decorating with "logging", but rather the result of "logging"
var CarDecorated = (function () {
    function CarDecorated() {
    }
    CarDecorated = __decorate([
        logging(false)
    ], CarDecorated);
    return CarDecorated;
}());
// creating a useful decorator
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var PlantDecorated = (function () {
    function PlantDecorated() {
        this.name = "Green plant";
    }
    PlantDecorated = __decorate([
        printable
    ], PlantDecorated);
    return PlantDecorated;
}());
var plantDec = new PlantDecorated();
plantDec.print(); // need to cast to "any" as TS thinks "print" doesn't exist
