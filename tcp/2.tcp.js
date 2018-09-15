let net = require('net');
let server = net.createServer();
let clients=[];
server.on('connection',function(socket){
    clients.push(socket);
    server.getConnections(function(error,count){
            socket.write(`欢迎进入 你是${count}`)
    })
    socket.setEncoding('utf8');
    socket.on('data',function(data){
        let d=data.toString().replace('\r\n','');
        clients.forEach((client)=>{
            if(client!==socket){
                client.write(d+'\r\n')
            }
        })
    })
    socket.on('end',function(){
        console.log('end')
        clients.filter(client=>client!=socket)

    })
})
server.listen(3000)