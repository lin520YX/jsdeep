let http = require('http');
http.createServer((req,res)=>{
    console.log(req.headers)
    console.log(req.url);
    let arr =[];
    req.on('data',data=>{
        arr.push(data)
    })
    req.on('end',(data)=>{
        console.log(ArrayBuffer.concat(data).toString())
    })
}).listen(3001);
// 前后端分离的好处
// 跨域
// 前端会js=>  node