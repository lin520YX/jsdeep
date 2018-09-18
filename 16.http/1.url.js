let urlStr= 'http://username:password@www.baidu.com:80/a.html?limit=1#hash'
//协议 anthor 主机名 端口号 路径 查询参数 hash值

let url  = require('url');
let {query,pathname,hostname} = url.parse(urlStr)
console.log(query,pathname,hostname)
