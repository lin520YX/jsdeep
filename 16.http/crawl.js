let http = require('http');
http.createServer((req,myRes)=>{
    http.get({
           host:'www.baidu.com',
           port:80         
    },function(res){
        res.on('data',function(data){

        })
    })
}).listen(3000)