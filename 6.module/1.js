// 模块氛围三种 核心模块 第三方 文件

// 文件加载问题

let str = require('./a');
// 查找第三方模块
console.log(module.paths)
// Array(6)["c:\Users\GZSH\Desktop\jsdeep\6.module\node_modules", 
// "c:\Users\GZSH\Desktop\jsdeep\node_modules", 
// "c:\Users\GZSH\Desktop\node_modules", 
// "c:\Users\GZSH\node_modules", 
// "c:\Users\node_modules", 
// "c:\node_modules"]
