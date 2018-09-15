let {Transform} = require('stream')
class MyTransform extends Transform{
    _transform(chunk,encoding,clearBuffer){
        let d=chunk.toString().toUpperCase();
        this.push(d)
        clearBuffer()
    }
}
let my = new MyTransform()
Process.stdin.pipe(my).pipe(procee.stdout);
// 压缩加密，把原有数据赛到转化流中，进行转化