
(function (modules) { 

  function require(moduleId) {


    var module  = {
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports,require);

    return module.exports;
  }
  return require("./src/index.js");
})

  ({
    "./src/index.js":
      (function (module, exports, require) {
        eval(`let result = require('src/1.js');
require('src/index.css')`);
      })
      ,
        "src/1.js":
        (function (module, exports) {
        eval(`module.exports = 'chengjianshabi '`);
        })
      ,
        "src/index.css":
        (function (module, exports) {
        eval(`
        let style = document.createElement('style');
        style.innerText="a{    background:red;}";
        document.head.appendChild(style);
    `);
        })
      
  
  });
