let fs = require('fs');
// fs.readFile('1.txt',{encoding:'utf8',flag:'r'},(err,data)=>{

// })
// fs.writeFile('1.txt',{flag:'r'},(err,data)=>{
    
// })

// function copy(source,target){

// }
// copy('1.txt','2.txt');

// fs.copyFile('1.txt','2.txt',(err,data)=>{

// })

fs.open('./1.txt','r',function(err,fd){
    let buf = Buffer.alloc(3);
     fs.read(fd,buf,1,2,5,function(err, bytesRead, buffer){
       console.log(bytesRead);
       console.log(buffer===buf);
       console.log(buf.toString());
     })
  })

//   let buf = Buffer.from('珠峰培训');
// fs.open('./2.txt', 'w', function (err, fd) {
//   fs.write(fd, buf, 3, 6, 0, function (err, written, buffer) {
//     console.log(written);
//     fs.fsync(fd, function (err) {
//       fs.close(fd, function (err) {
//           console.log('写入完毕!')
//         }
//       );
//     });
//   })
// });