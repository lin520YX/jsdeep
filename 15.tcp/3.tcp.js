let net = require('net');
let lists = {};
let server = net.createServer(function (socket) {
    let key = socket.remoteAddress + socket.remotePort;
    lists[key] = { name: 'aaa', socket };
    server.getConnections(function (error, count) {
        socket.write(`欢迎进入 你是${count}\r\n`)
    })
    socket.setEncoding('utf8');
    socket.on('data', function (data) {
        data.toString().replace('\r\n', '');
        let k = data.split(':');
        switch(k[0]){
            case 'r':
            rename(key,k[1]);
            break;
            showList(k[1],k[2],k);
            case 'l':
            break;
            private(k[1],k[2],k);
            case 's':
            break;
            broadCase(key,content);
            case 'b':
            break;
        }
    })
    socket.on('end', function () {
        console.log('end')

    })
}).listen(3000)
function rename(key,newName){
    lists[key].name=newName;
    lists[key].socket.write(`您的新名字${newName}\r\n`)
}
function showList(key){
    let userLists = Object.values(lists).map(val=>val.name);
    list[key].socket.write(userLists.join('\r\n'));
    list[key].socket.write(userLists)
}
function private(username,content,key){
    let user = Object.values(lists).find(val=>val.name===username);
    if(user){
        user.socket.write(`${lists[key],name}:${content}\r\n`);
    }
}
function broadCase(key,content){
    for(let k in key){
        if(key !=k){

        }
    }
}