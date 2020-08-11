var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.staticFunction = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.staticFunction(); // 调用静态方法
