let fs = require('fs');
let rs = fs.createReadStream('./1.txt',{
    highWaterMark:4
});
let ws = fs.createWriteStream('./3.txt',{
    highWaterMark:4
});
rs.pipe(ws)