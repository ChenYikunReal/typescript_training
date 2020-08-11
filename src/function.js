// 可选参数
function f1(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = f1("Bob"); // 正确
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = f1("Bob", "Adams"); // 正确
// 默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
// 不定长参数
function f3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = f3("Joseph", "Samuel", "Lucas", "MacKinzie");
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
// 匿名函数
var msg = function () {
    return "hello world";
};
console.log(msg());
// 有参数的匿名函数
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
// 匿名函数自调用
(function () {
    var x = "Hello!!";
    console.log(x);
})();
// 通过Function构造函数
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
// 递归函数
function factorial(number) {
    if (number <= 0) { // 停止执行
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // 调用自身
    }
}
;
console.log(factorial(6)); // 输出 720
// Lambda函数
var foo1 = function (x) { return 10 + x; };
console.log(foo1(100)); //输出结果为 110
// 函数体一行写不完
var foo2 = function (x) {
    x = 10 + x;
    console.log(x);
};
console.log(foo2(100));
// 不强行指定参数类型
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " 是一个数字");
    }
    else if (typeof x == "string") {
        console.log(x + " 是一个字符串");
    }
};
func(12);
func("Tom");
// Lambda函数单参数可以不加括号
var display = function (x) {
    console.log("输出为 " + x);
};
display(12);
// Lambda函数空参数时可以使用空括号
var disp = function () {
    console.log("Function invoked");
};
disp();
function f4(x, y) {
    console.log(x);
    console.log(y);
}
f4("abc");
f4(1, "xyz");
