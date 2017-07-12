var MyMath;
(function (MyMath) {
    function calculateRectangelArea(length, width) {
        return length * width;
    }
    MyMath.calculateRectangelArea = calculateRectangelArea;
})(MyMath || (MyMath = {}));
