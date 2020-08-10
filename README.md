# TypeScript学习记录

![在这里插入图片描述](https://github.com/ChenYikunReal/typescript_training/blob/master/images/typescript-background.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)
<br/>

认识TypeScript：
- TypeScript是JavaScript的一个超集，支持ECMAScript6标准。
- TypeScript由微软开发的自由和开源的编程语言。
- TypeScript设计目标是开发大型应用，它可以编译成纯JavaScript，编译出来的JavaScript可以运行在任何浏览器上。

## Typescript安装
(此处假设Node已经安装完毕)<br/>
安装命令：
```shell script
cnpm install -g typescript
```
直接使用以下命令测试TypeScript版本：
```shell script
tsc -v
```

## TypeScript程序编写执行过程
以HelloWorld为例：<br/>
新建<code>hello.ts</code>文件：
```typescript
var message:string = "Hello World" 
console.log(message)
```
使用下面的命令编译<code>.ts</code>为<code>.js</code>：
```shell script
tsc hello.ts
```
编译成功则出现<code>hello.js</code>文件：
```javascript
var message = "Hello World";
console.log(message);
```
不需要再编写HTML页面使用浏览器测试，我们直接使用node.js做测试：
```shell script
node hello.js
```

![在这里插入图片描述](https://github.com/ChenYikunReal/typescript_training/blob/master/images/typescript-compiler.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

## tsc编译参数说明
- `--help`：显示帮助信息
- `--module`：载入扩展模块
- `--target`：设置ECMA版本
- `--declaration`：额外生成一个`.d.ts`扩展名的文件<br/>`tsc ts-hw.ts --declaration`命令会生成`ts-hw.d.ts`、`ts-hw.js`两个文件
- `--removeComments`：删除文件的注释
- `--out`：编译多个文件并合并到一个输出的文件
- `--sourcemap`：生成一个`sourcemap(.map)`文件(sourcemap是一个存储源代码与编译代码对应位置映射的信息文件)
- `--module noImplicitAny`：在表达式和声明上有隐含的Any类型时报错
- `--watch`：在监视模式下运行编译器，会监视输出文件，在它们改变时重新编译。

## WebStorm自动编译TypeScript代码
![在这里插入图片描述](https://github.com/ChenYikunReal/typescript_training/blob/master/images/ws-auto-compile.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

## Typescript关键词
|关键词|关键词|
|:---:|:---:|
|break | as 
| catch | switch
|case | if 
| throw | else
|var | number 
| string | get
|module | type 
| instanceof | typeof
|public | private 
| enum | export
|finally | for 
| while | void
|null | super 
| this | new
|in | return 
| true | false
|any | extends 
| static | let
|package | implements 
| interface | function
|new | try 
| yield | const
|continue | do  

## Typescript类型never
never是其它类型(包括null和undefined)的子类型，代表从不会出现的值。这意味着声明为never类型的变量只能被never类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点(例如无限循环)
