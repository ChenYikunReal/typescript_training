// 创建元组
var mytuple = [10, "Hello", "World", "typeScript"];
// 返回元组的大小
console.log("添加前元素个数：" + mytuple.length);
// push()向元组添加元素，添加在最后面
mytuple.push(12);
console.log("添加后元素个数：" + mytuple.length);
console.log("删除前元素个数：" + mytuple.length);
// 删除并返回删除的元素
console.log(mytuple.pop() + " 元素从元组中删除");
console.log("删除后元素个数：" + mytuple.length);
// 元组是可变的
mytuple[3] = "TypeScript";
// 元组解构
var a = mytuple[0], b = mytuple[1], c = mytuple[2], d = mytuple[3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
