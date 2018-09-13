// 1.链式调用
// let promise = new Promise((resolve,reject)=>{
//     resolve()
// })
// promise.then((data)=>{
//     console.log(data)
// })
let fs = require('fs')
function read(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',(err,data)=>{
            if(err)reject(err);
            resolve(data)
        })
    })
}
// 1 流程管理（1.去掉data 中的.txt 后缀 2.加上一个jpg）
// 1 每次promise 之后返回一个新的promise
// 2 then 返回一个结果的化 回传递到下一次then
// 3 如果then 中出现异常 下一个then 会失败
// 4 失败之后还可以成功
// 5 catch 会捕获到没有捕获到的异常
// 6 成功失败是可选择参数
// 7 如果then 返回的是一个promise 那么会等待promise 执行在决定返回的那个peomise是成功还是失败

read('./name.txt').then(data=>{
   return read(data)
   //返回一个promise 的化会等待这个promise 执行之后 promise 如果成功走下一个then 如果失败就失败了
}).then(data=>{
    console.log(data)
})


// read('./name.txt').then(data=>{
//    return data.split('.')[0];
// },err=>{}).then(data=>{
//     console.log(data)
// })

