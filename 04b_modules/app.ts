//import {PI, calculateCircumference} from "./math/circle";
import * as Circle from "./math/circle";
//import {calculateRectangle} from "./math/rectangle";
import calc from "./math/rectangle"; 

console.log(Circle.PI);		// must now add "Circle." to the front
console.log(Circle.calculateCircumference(21));
//console.log(calculateRectangle(100, 30));
console.log(calc(100, 30));