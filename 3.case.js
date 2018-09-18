let Promise1=require('./promise');
let promise = new Promise1((resolve,reject)=>{
    resolve(1111);
}).then(data=>{
    console.log(data)
})
// promise.then(function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(new Promise((resolve,reject)=>{
//                 resolve(1000)
//             }))
//         },2000)
//     })
// }).then(data=>{
//     console.log(data)
// })