let Promise = require('./promise');
let p = new Promise((resolve,reject)=>{
    resolve('111')
})
p.then((value)=>{
    console.log(value)
},()=>{

})