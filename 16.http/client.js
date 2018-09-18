let http = require('http');
let r = JSON.stringify({a:'1',b:'2'});
let opts = {
    hostname:'localhost',
    port:3000,
    method:'POST',
    path:'/a',
    headers:{
        'Content-Length':r.length
        }
}
let client=http.request(opts,function(res){

})
client.end(r)