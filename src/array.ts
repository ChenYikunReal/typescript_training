let nums:number[] = [1,2,3,4]
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);

let arr_names:number[] = new Array(4)
for(let i = 0; i<arr_names.length; i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}

let sites:string[] = new Array("语文","数学","英语")
for(let i = 0;i<sites.length;i++) {
    console.log(sites[i])
}

// 我们也可以把数组元素赋值给变量，即数组解构
let arr:number[] = [12,13]
let[x,y] = arr // 将数组的两个元素赋值给变量 x 和 y
console.log(x)
console.log(y)

// 数组迭代
for(let j in nums) {
    console.log(nums[j])
}

// 多维数组
let multi:number[][] = [[1,2,3],[23,24,25]]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[1][0])
console.log(multi[1][1])
console.log(multi[1][2])
