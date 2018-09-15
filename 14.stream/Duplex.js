let {Duplex} = require('stream')
class MyDuplex extends Duplex{
    _write(chunk,encoding,clearBuffer){
        clearBuffer()
    }
    _read(){
        this.push('123')
        this.push(null)
    }
}
let my = new MyDuplex()
my.setEncoding('utf8');
my.on('data',(data)=>{
console.log(data)
})
my.write('hello','utf8',()=>{});
// 双工流