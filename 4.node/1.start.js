// 前端又一个window对象 在浏览器中window代理了global
// 我们访问时是window

// node中没有window 可以直接获取global 全局

// window.a=1;

// 挂在global 上的属性就是我们可以直接获取的

console.log(global)

// this 其实是node 运行文件时修改了this 的指向

//  通过var 声明的属性不会挂载到 global上

// 一般情况下不会在global上挂属性

// 1.console

// 2 process 进程

// 3.buffer  缓存区 二进制 16进制

// 4.clearImmediate setImmediate

// 5.setInterval ClearInterval

// 6.setTimeout clearTimeout

// v8 引擎上的api eval uri encode decode


// 1.console
// console.log() === console.info()
// process.stdout.write('hello'); 
// console.warn() === console.info()
// process.stderr.write('hello'); 


// node 集成了一个模块assert
// 单元测试 断言


// 监听输入
// process.stdin.on('data',function(data){
//     console.log(data.toString())
// })

// let fs = require('fs');
// // process.chdir('4.node') 改变工作目录
// fs.readFile('1.txt','utf8',(data)=>{
//     console.log(data)
// })
// commander 解析用户执行node文件时 传递的参数么就是把传递的参数 变成底箱，可以取到对应的值
// console.log(process.argv.slice(2))
// let yargs=process.argv.slice(2).reduce((prev,next,index,arr)=>{
//     if(next.includes('--')){
//             prev[next.slice(2)]=arr[index+1]
//     }
//     return prev
// },{})
// console.log(yargs)

// webpackdefineplugin

// cross_env
console.log(process.env.NODE_ENV)

let url;
if(process.env.NODE_ENV==='production'){
    url='localhost:3000';
}else{
    url='123';
}
console.log(123)
