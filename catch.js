let Promise1 = require('./promise')
let p = new Promise1((resolve,reject)=>{
    resolve()
})
// 不写成功的回调
p.then(data=>{
    throw Error('sb')
}).then(null,(err)=>{
    console.log(err)
}).catch(err=>{
    console.log('err',err)
})