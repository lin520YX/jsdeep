//   传输层协议
// http websocket
// http和websocket 都是基于tcp 封装的


// let net = require('net');
// let server = net.createServer((socket) => {
//     socket.setEncoding('utf8')
//     socket.on('data', (data) => {
//         socket.write(`
//             HTTP/1.1 200 OK
//             Connection:Keep-Alive
//             Content-Length:10
//         `);
//         socket.end();
//     })
// })
// server.listen(3000, () => {
//     console.log('server start')
// })


let net = require('net');
let server = net.createServer()
server.on('connection', function (socket) {
    server.getConnections(function(err,data){
        socket.write('zuidalianjieshu'+server.maxConnections);
    })
    socket.setEncoding('utf8')
    socket.on('data', (data) => {
        data = data.replace('\n\r','')
        server.close();// 新来的不可以访问 都走完后 会关闭服务器
        // server.unref()
    })
    socket.write('你好')
})
// 设置最大连接数
server.maxConnections = 3
server.on('close',function(){
    console.log('server close')
})
server.listen(3000, () => {
    console.log('server start')
})