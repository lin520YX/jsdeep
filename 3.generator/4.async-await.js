let fs = require('mz/fs');
// let co = require('co')
// async 函数就是promise es7
async function  read(){
    let age=await fs.readFile('./name.txt','utf8'); // {done:false,value:promise}
    let address=await fs.readFile(age,'utf8');
    let r = await fs.readFile(address,'utf8');
    return r;
}
read().then(data=>{
    console.log(data)
})


