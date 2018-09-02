// let str = require('./a.js');
// console.log(str)
let fs = require('fs')
function req(moduleName) {
    let content = fs.readFileSync(moduleName, 'utf8');
    console.log('content'+content)
    let fn = new Function('exports', 'module', 'require', '__dirname', '__filename', content + '\n return module.exports');
    let module = {
        exports: {}
    }
    return fn(module.exports, module, req, __dirname, __filename);
}
console.log(req('./a.js'))