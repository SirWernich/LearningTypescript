"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {PI, calculateCircumference} from "./math/circle";
var Circle = require("./math/circle");
//import {calculateRectangle} from "./math/rectangle";
var rectangle_1 = require("./math/rectangle");
console.log(Circle.PI); // must now add "Circle." to the front
console.log(Circle.calculateCircumference(21));
//console.log(calculateRectangle(100, 30));
console.log(rectangle_1.default(100, 30));
