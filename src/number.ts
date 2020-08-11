// NaN
let month = 0
if( month<=0 || month >12) {
    month = Number.NaN
    console.log("月份是："+ month)
} else {
    console.log("输入月份数值正确。")
}

// prototype
function employee(id:number,name:string) {
    this.id = id
    this.name = name
}

let emp = new employee(123,"admin")
employee.prototype.email = "admin@gmail.com"

console.log("员工号: "+emp.id)
console.log("员工姓名: "+emp.name)
console.log("员工邮箱: "+emp.email)


//toExponential() => 把对象的值转换为指数计数法
let num1 = 1225.30
let val = num1.toExponential();
console.log(val) // 输出： 1.2253e+3

// toFixed() => 把数字转换为字符串，并对小数点指定位数
let num3 = 177.234
console.log("num3.toFixed() 为 "+num3.toFixed())    // 输出：177
console.log("num3.toFixed(2) 为 "+num3.toFixed(2))  // 输出：177.23
console.log("num3.toFixed(6) 为 "+num3.toFixed(6))  // 输出：177.234000

// toLocaleString() => 把数字转换为字符串，使用本地数字格式顺序
let num4 = new Number(177.1234);
console.log( num4.toLocaleString());  // 输出：177.1234

// toPrecision() => 把数字格式化为指定的长度
let num5 = new Number(7.123456);
console.log(num5.toPrecision());  // 输出：7.123456
console.log(num5.toPrecision(1)); // 输出：7
console.log(num5.toPrecision(2)); // 输出：7.1

// toString() => 把数字转换为字符串，使用指定的基数。数字的基数是2~36之间的整数。若省略该参数，则使用基数10
let num6 = new Number(10);
console.log(num6.toString());  // 输出10进制：10
console.log(num6.toString(2)); // 输出2进制：1010
console.log(num6.toString(8)); // 输出8进制：12

// valueOf() => 返回一个Number对象的原始数字值
let num2 = new Number(10);
console.log(num2.valueOf()); // 输出：10
