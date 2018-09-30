// 核心模块
// 实现了promise 化
let util = require('util');
let fs = require('fs');

// let read = util.promisify(fs.readFile);

// async function r(){
//     let result = await read('./.gitignore','utf8')
//     console.log(result)
// }
// r();
// console.log()

// 2) 判断类型
// 一般情况我们会把错误对象转化成字符串
// util.isArray()
// util.inspect()//对象转化字符串

// 3） 继承 儿子继承父亲上的原型方法
// util.inherits(childrenConstructor,parentConstructor);
// Object.create Object.setPrototypeof(children.Prototype,parentPrototype)
