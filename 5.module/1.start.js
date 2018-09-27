// 调试
// function sum(a,b){
//     let c=a+b;
//     return pow(c)
// }
// function pow(val){
//     return Math.pow(val,2)
// }

// console.log(sum(1,2))

// Node 在执行代码的时候会自己增加一个自执行函数
// commonjs 规范
// 1 每一个js文件都是一个模块
// 2 导出模块的方式都使用module.exports
// 3 引入模块 require

let str = 'hello';
module.exports=str;