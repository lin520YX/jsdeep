let http = require('http');
http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader()
}).listen(3000,function(){
    console.log('server start')
})