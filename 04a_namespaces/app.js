/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
console.log(MyMath.calculateCircumference(12));
console.log(MyMath.calculateRectangelArea(12, 45));
var Root;
(function (Root) {
    var Inner;
    (function (Inner) {
        function Banana() {
            console.log("root.inner: banana!");
        }
        Inner.Banana = Banana;
    })(Inner = Root.Inner || (Root.Inner = {}));
})(Root || (Root = {}));
Root.Inner.Banana();
