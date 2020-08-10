// Any类型
let anyObj : any = 1;

// 二进制数值
let binaryLiteral: number = 0b1010;
// 八进制数值
let octalLiteral: number = 0o744;
// 十进制数值
let decLiteral: number = 6;
// 十六进制数值
let hexLiteral: number = 0xf00d;

let userName: string = "Sam";
let userId: number = 1;
let words: string = `学生姓名:${userName}\n学生ID:${userId}`;

let flag: boolean = true;

// 在元素类型后面加上[]表示数组
let array1: number[] = [1, 2, 3];
// 使用数组泛型
let array2: Array<number> = [1, 2, 3];

// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
let tuple: [string, number];
tuple = ['Sam', 1];
// tuple = [1, 'Runoob'];    // 报错
console.log(tuple[0]);

// 枚举类型用于定义数值集合
enum Sex {MALE, FEMALE};
let male: Sex = Sex.MALE;
// 输出0
console.log(male);

// void用于标识方法返回值的类型，表示该方法没有返回值
function hello(): void {
    alert("Hello, TypeScript!");
}

// 定义存储各种类型数据的数组
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
