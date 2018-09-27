// let str = require('./1.start');
// console.log(str)
// // 默认会把引用的module.exports 返回作为require的返回结果

// // 1.模块读取 内置模块 node 提供 不需要加入相对路径或者绝对路径
// let fs = require('fs');
// let path = require('path');


// let r=fs.readFileSync(path.resolve(__dirname,'./1.start.js'),'utf8');
// console.log(r)
// // 判断是否存在
// try{
//     console.log(fs.accessSync(path.resolve(__dirname,'./1.start.js')))
// }catch(e){
//     console.log(e)
// }

// 让字符串执行 eval(不干净的执行)  new Function

// let a ='lyf'
// eval('console.log(a)');//依赖于上下文环境

// let a =new Function('a','console.log(a)');
// console.log(a(1),a.toString())


let vm = require('vm'); //沙箱
vm.runInThisContext('let a =1;console.log(a)')

// 引用自己的模块可以省略后缀 .js .json .node