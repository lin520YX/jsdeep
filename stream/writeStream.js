let fs = require('fs');
let ws = fs.createWriteStream('2.txt',{
    flags:'w',
    encoding:'utf8',
    mode:0o666,
    autoClose:true,
    start:0,
    highWaterMark:5
});
// let flag= ws.write('hello','utf8',()=>{console.log('ok')});
// console.log(flag);
// flag.write(2)
// console.log(flag);
let i =0;
function write(){
    let flag =true;
    while(i<10&&flag==true){
        flag=ws.write(i+++'');
    }
}
write()