// 声明一个联合类型 => Type1|Type2|Type3
let union1: string|number
union1 = 12
console.log("数字为 "+ union1)
union1 = "Hello"
console.log("字符串为 " + union1)

// 联合类型作为函数参数使用
function disp(name:string|string[]) {
    if(typeof name == "string") {
        console.log(name)
    } else {
        let i;
        for(i = 0;i<name.length;i++) {
            console.log(name[i])
        }
    }
}
disp("语文")
console.log("输出数组>>>>>")
disp(["语文","数学","英语"])

// 联合参数数组
let arr: number[]|string[];
let i: number;
arr = [1, 2, 3]
console.log("**数字数组**")
for(i = 0; i<arr.length; i++) {
    console.log(arr[i])
}
arr = ["语文","数学","英语"]
console.log("**字符串数组**")
for(i = 0; i<arr.length; i++) {
    console.log(arr[i])
}
