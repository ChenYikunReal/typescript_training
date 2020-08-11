var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var obj = new Person1();
var isPerson = obj instanceof Person1;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
