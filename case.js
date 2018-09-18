let promise = require('./promise');
let fs = require('fs');
// function read(url){
//     return new Promise((resolve,reject)=>{
//             fs.readFile(url,'utf8',(err,data)=>{
//                 if(err)return;
//                 resolve(data)
//             })
//     })
// }

// angular q 语法糖
function read(url){
    let dfd=promise.defer()
            fs.readFile(url,'utf8',(err,data)=>{
                if(err)dfd.reject(err);
                dfd.resolve(data)
            })
    return dfd.promise
}
read('./name.txt').then(data=>{
    console.log(data)
})