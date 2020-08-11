// 声明一个联合类型 => Type1|Type2|Type3
var union1;
union1 = 12;
console.log("数字为 " + union1);
union1 = "Hello";
console.log("字符串为 " + union1);


// 联合类型作为函数参数使用
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i_1;
        for (i_1 = 0; i_1 < name.length; i_1++) {
            console.log(name[i_1]);
        }
    }
}
disp("语文");
console.log("输出数组>>>>>");
disp(["语文", "数学", "英语"]);


// 联合参数数组
var arr;
var i;
arr = [1, 2, 3];
console.log("**数字数组**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["语文", "数学", "英语"];
console.log("**字符串数组**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
