// 接口中使用联合类型
interface RunOptions {
    program:string;
    commandline:string[]|string|(()=>string);
}

// commandline 是字符串
let options:RunOptions = {program:"test1",commandline:"Hello"};
console.log(options.commandline)

// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]};
console.log(options.commandline[0]);
console.log(options.commandline[1]);

// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}};

let fn:any = options.commandline;
console.log(fn());



// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串
interface namelist {
    [index:number]:string
}
// let list2:namelist = ["John",1,"Bran"] // 错误 元素 1 不是 string 类型

interface ages {
    [index:string]:number
}
let ageList :ages;
ageList["John"] = 15   // 正确
// ageList[2] = "nine"   // 错误


// 接口单继承实例
interface Person {
    age:number
}
interface Musician extends Person {
    instrument:string
}
let drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Drums"
console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)



// 接口多继承实例
interface IParent1 {
    v1:number
}
interface IParent2 {
    v2:number
}
interface Child extends IParent1, IParent2 { }
let Iobj:Child = { v1:12, v2:23}
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
