
let fs = require('fs');
let vm = require('vm');
let path = require('path');
function Module(id) {
    this.id = id;
    this.exports = {}
}
function tryModuleLoad(module) {
    let ext = path.extname(module.id);
    Module._extensions[ext](module)
}
Module._load = function (p) {
    // 这个文件可能没有后缀
    let filename = Module._resolveFilename(p)
    let cache = Module._cache[filename]
    if (cache) {

    }
    let module = new Module(filename)
    Module._cache[filename] = module;

    //    看一下模块的扩展名
    tryModuleLoad(module)
    return module.exports
}
Module.warpper=[
    '(function(exports,require,module,__filename,__dirname){',
    '})'
]
Module.warp=function(script){
    return Module.warpper[0]+script+Module.warpper[1]
}
Module._extensions = {
    '.js': function (module) {
        let content= fs.readFileSync(module.id, 'utf8');
        let funStr = Module.warp(content);
        let fn=vm.runInThisContext(funStr);
        fn.call(module.exports,module.exports,req,module)
    },
    '.json': function (module) {
        module.exports = fs.readFileSync(module.id, 'utf8')
    }
}
Module._resolveFilename = function (p) {
    // 看文件是否存在后缀 。js  .json
    if (/\.js$|\.json$/.test(p)) {
        return path.resolve(__dirname, p);
    } else {
        let exts = Object.keys(Module._extensions);
        let realPath;
        for (let i = 0; i < exts.length; i++) {
            let temp = path.resolve(__dirname, p + exts[i])
            try {
                fs.accessSync(temp);
                realPath = temp;
                break;
            } catch (error) {

            }

        }
        if (!realPath) {
            throw new Error('module not exist')
        }
        return realPath;
    }
}
Module._cache = {}
function req(p) {
    return Module._load(p)
}
let str = req('./1.start');
console.log(str.toString())