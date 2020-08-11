class Shape {
    Area:number

    constructor(a:number) {
        this.Area = a
    }
}

class Circle extends Shape {
    disp():void {
        console.log("圆的面积:  "+this.Area)
    }
}

let obj = new Circle(223);
obj.disp()
