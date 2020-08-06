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
