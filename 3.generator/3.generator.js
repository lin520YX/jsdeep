let fs = require('mz/fs');
// let co = require('co')
function * read(){
    let age=yield fs.readFile('./name.txt','utf8'); // {done:false,value:promise}
    let address=yield fs.readFile(age,'utf8');
    let r = yield fs.readFile(address,'utf8');
    return r;
}
co(read()).then(data=>{
    console.log(data)
})
// let it = read()
// it.next().value
// .then(data=>{
//     it.next(data).value.then(data=>{
//         it.next(data).value.then(data=>{
//             console.log(data)
//         })
//     })
// })
function co(it){
    return new Promise((resolve,reject)=>{
            // 异步线性执行
            function next(data){
                let {value,done}=it.next(data);
                if(!done){
                    value.then(data=>{
                        next(data)
                    },reject)
                }else{
                    resolve(value)
                }
            }
            next()
    })
}

