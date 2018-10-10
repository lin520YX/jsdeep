// 内存区
// buffer 数组中有pop push shift unshift
// 数字声明 字符串 数组（定长）

//阿福

let buffer = Buffer.alloc(6);
buffer.write('阿福',0,6)
console.log(buffer)

// copy 两段内容-> buffer 把它写一个整体的buffer 中

let buf1=Buffer.from('超级')
let buf2=Buffer.from('屁屁')
let buf3=Buffer.alloc(12);
// 四个参数 目标 从目标位置开始  源位置
buf1.copy(buf3,0,0,6)
buf2.copy(buf3,6,0,6)
console.log(buf3.toString())