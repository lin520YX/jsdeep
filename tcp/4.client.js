let net = require('net');
let client=net.createConnection({port:3000},function(){
    console.log('ljsl')
});
client.write('l:');
client.on('data',function(data){
    console.log(data.toString())
})
