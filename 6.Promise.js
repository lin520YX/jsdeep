let p = Promise.resolve();
p.then(DataCue => {
    console.log('cg')
}, err => {
    console.log('sb')
})
function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, function (err, data) {
                if (err) reject(err);
                resolve(data)
            })
        })
    }
}
let read = promisify(fs.readFile)
read('./age.txt','utf8').then(data=>{
    console.log(data);
},err=>{
    console.log(err);
})


function promisifyAll(obj){
    for(let key in obj){
        obj[key+'Async']=promisify(obj[key])
    }
}
promisifyAll(fs);
fs.readFileAsync('./age.txt','utf8').then(data=>{
    console.log(data)
})


Promise.all([]).then(data=>{

},err=>{
    
});
// 按照数组的结果放到成功的回调里面，只有全部成功才算成功