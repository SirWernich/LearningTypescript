/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

console.log(MyMath.calculateCircumference(12));
console.log(MyMath.calculateRectangelArea(12, 45));

namespace Root {
	export namespace Inner {
		export function Banana() {
			console.log("root.inner: banana!");
		}
	}
}

Root.Inner.Banana();