class Root {
    str:string;
}

class Child extends Root {}

// 多重继承，继承了 Child 和 Root 类
class Leaf extends Child {}

// 不支持多继承 但可以多级继承
// class Test1{}
// class Test2 extends Root, Test1 {}

let obj = new Leaf();
obj.str ="hello"
console.log(obj.str)
