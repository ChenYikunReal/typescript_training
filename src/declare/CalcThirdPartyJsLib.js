// 使用第三方库
var DeclareTest;
(function(DeclareTest) {
    var Calc = (function () {
        function Calc() {
        }
    })
    Calc.prototype.doSum = function (limit) {
        var sum = 0;

        for (var i = 0; i <= limit; i++) {
            sum = sum + i;
        }
        return sum;
    }
    DeclareTest.Calc = Calc;
    return Calc;
})(DeclareTest || (DeclareTest = {}));
var test = new DeclareTest.Calc();
