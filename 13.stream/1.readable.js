let fs = require('fs');
let rs = fs.createReadStream('./1.txt',{
    flags:'r',
    autoClose:'true',
    highWaterMark:3,
    encoding:null,
})
rs.on('readable',()=>{
    // 如果缓存区没这么大 返回null
    let r = rs.read(1);
    console.log(rs._readableState.length)
    console.log(r)
})