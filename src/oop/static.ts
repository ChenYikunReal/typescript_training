class StaticMem {
    static num:number;
    static staticFunction():void {
        console.log("num 值为 "+ StaticMem.num)
    }
}

StaticMem.num = 12     // 初始化静态变量
StaticMem.staticFunction()       // 调用静态方法