var MyMath;
(function (MyMath) {
    function calculateRectangelArea(length, width) {
        return length * width;
    }
    MyMath.calculateRectangelArea = calculateRectangelArea;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
