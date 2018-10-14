let fs = require('fs');
function copy(source,target){
    let BUFFER_SIZE = 3;
    let read_position=0
    fs.open(source,'r',(err,rfd)=>{
        fs.open(target,'w',(err,wfd) =>{
            let buffer = Buffer.alloc(BUFFER_SIZE);
            function next(){
                fs.read(rfd,buffer,0,BUFFER_SIZE,read_position,(err,byteRead)=>{
                    if(byteRead){
                        read_position+=byteRead;
                        fs.write(wfd,buffer,0,byteRead,null,()=>{
                            next()
                        })
                    }else{
                        fs.close(rfd,()=>{});
                        fs.fsync(wfd,()=>{fs.close(wfd,()=>{})})
                    }
                })
            }
            next()
        })
    })
}