// 内存区
// buffer 数组中有pop push shift unshift
// 数字声明 字符串 数组（定长）

//阿福

// let buffer = Buffer.alloc(6);
// buffer.write('阿福',0,6)
// console.log(buffer)

// // copy 两段内容-> buffer 把它写一个整体的buffer 中

// let buf1=Buffer.from('超级')
// let buf2=Buffer.from('屁屁')
// let buf3=Buffer.alloc(12);
// // 四个参数 目标 从目标位置开始  源位置
// Buffer.prototype.copy = function (target,pos,sourceStart,sourceEnd){
//     let j=0;
//     for(let i=sourceStart;i<sourceEnd;i++){
//         target[pos+j++]=this[i]
//     }
// }
// buf2.copy(buf3,6,3,6)
// buf1.copy(buf3,0,0,6)
// console.log(buf3.toString())


//  concat平接
let buf1=Buffer.from('超级')
let buf2=Buffer.from('屁屁')
function Kuffer(){

}
let kuffer=new Kuffer()
Kuffer.prototype.concat=function(buffers,len = buffers.reduce((prev,next)=>prev+next.length,0)){
    let buffer = Buffer.alloc(len);
    pos = 0;
    buffers.forEach(buf=>{
        buf.copy(buffer,pos,0,buf.length);
        pos =pos + buf.length;
    });
    return buffer.slice(0,pos);
}
console.log(kuffer.concat([buf1,buf2]))

// indexOf 索引

let buf=Buffer.from('linyunfu**chao**jishuai');
Buffer.prototype.split=function(sep){
    let arr =[];
    let pos =0;
    let len = Buffer.from(sep).length;
    let r =0;
    while(-1!==(r = this.indexOf(sep,pos))){
        arr.push(this.slice(pos,r));
        pos = r+len;
    }
    arr.push(this.slice(pos))
    return arr;
}
console.log(buf.split('**').toString())
