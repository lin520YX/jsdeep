// 1 处理异步回调问题
// 2 同步最终结果
// reject 不买 resolve 买 pendding 等待
// let fs = require('fs');
// fs.readFile('promise/name.txt','utf8',(err,data)=>{
//     fs.readFile(`promise/${data}`,'utf8',(err,data)=>{
//         console.log(data)
//     })
// })
// promise  es6规范 类
// new promise 时需要传递一个executor 执行器,执行器会立刻执行
// 执行器可以传递两个参数 resolve 成功的函数 他调用是可以传递一个值，值可以是任何值 reject 失败函数也可以传一个值
// 只能从pending态转到成功或者失败
// 每个实例都有一个then 方法，这两个方法传递两个参数，一个是成功，一个是失败
// 如果调用then 发现成功了 会让成功的函数执行并且把成功的内容当作参数传递到函数中
// 状态是panding 要把函数存起来 确定之后在执行
// 如果出现异常 变成失败的状态
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
    },100)
    // reject(3)
})
promise.then((value)=>{
    console.log(value)
},(reason)=>{
    console.log(reason)
});