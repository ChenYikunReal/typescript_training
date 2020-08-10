// Any类型
var anyObj = 1;
// 二进制数值
var binaryLiteral = 10;
// 八进制数值
var octalLiteral = 484;
// 十进制数值
var decLiteral = 6;
// 十六进制数值
var hexLiteral = 0xf00d;
var userName = "Sam";
var userId = 1;
var words = "\u5B66\u751F\u59D3\u540D:" + userName + "\n\u5B66\u751FID:" + userId;
var flag = true;
// 在元素类型后面加上[]表示数组
var array1 = [1, 2, 3];
// 使用数组泛型
var array2 = [1, 2, 3];
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
var tuple;
tuple = ['Sam', 1];
// tuple = [1, 'Runoob'];    // 报错
console.log(tuple[0]);
// 枚举类型用于定义数值集合
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
})(Sex || (Sex = {}));
;
var male = Sex.MALE;
// 输出0
console.log(male);
// void用于标识方法返回值的类型，表示该方法没有返回值
function hello() {
    alert("Hello, TypeScript!");
}
// 定义存储各种类型数据的数组
var arrayList = [1, false, 'fine'];
arrayList[1] = 100;
