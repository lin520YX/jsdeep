#! /usr/bin/env node
// 描述如何打包
let entry = './src/index.js'; //入口文件
let output = './dist/main.js';
let fs = require('fs');
let script = fs.readFileSync(entry,'utf8');
let ejs = require('ejs');
let template=`
(function (modules) {
    function __webpack_require__(moduleId) {
      var module = {
        exports: {}
      };
  
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  
      return module.exports;
    }
    return __webpack_require__(__webpack_require__.s = "<%-entry%>");
  })
    ({
      "<%-entry%>":
        (function (module, exports) {
  
          eval(\`<%-script%>\`);
  
        })
    });
`

let result = ejs.render(template,{
    entry,
    script,
});
fs.writeFileSync(output,result);
console.log('cg')