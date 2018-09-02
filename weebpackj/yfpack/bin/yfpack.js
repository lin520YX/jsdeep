#! /usr/bin/env node
// 描述如何打包
let entry = './src/index.js'; //入口文件
let output = './dist/main.js';
let fs = require('fs');
let script = fs.readFileSync(entry,'utf8');
let path = require('path');
let modules=[];
let styleLoader =function(source){
    console.log(source)
    return `
        let style = document.createElement('style');
        style.innerText=${JSON.stringify(source).replace(/\\r\\n/g,'')};
        document.head.appendChild(style);
    `
}
script=script.replace(/require\(['"](.+?)['"]\)/g,function(){
  let name = path.join('./src', arguments[1]);
  let content=fs.readFileSync(name,'utf8');
  if(/\.css/.test(name)){
    content=styleLoader(content)
  }
  modules.push({
    name,content
  })
  return `require('${name}')`
})
let ejs = require('ejs');
let template=`
(function (modules) { 

  function __webpack_require__(moduleId) {


    var module = installedModules[moduleId] = {
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    return module.exports;
  }
  return __webpack_require__("<%-entry%>");
})

  ({
    "<%-entry%>":
      (function (module, exports, __webpack_require__) {
        eval(\`<%-script%>\`);
      })
      <%for(let i=0;i<modules.length;i++){
        let module = modules[i];%>,
        "<%-module.name%>":
        (function (module, exports) {
        eval(\`<%-module.content%>\`);
        })
      <%}%>
  
  });
`

let result = ejs.render(template,{
    entry,
    script,
    modules
});
fs.writeFileSync(output,result);
console.log('cg')