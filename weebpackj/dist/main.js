
(function (modules) { 

  function __webpack_require__(moduleId) {


    var module = installedModules[moduleId] = {
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    return module.exports;
  }
  return __webpack_require__("./src/index.js");
})

  ({
    "./src/index.js":
      (function (module, exports, __webpack_require__) {
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
        style.innerText="a{\n    background:red;\n}";
        document.head.appendChild(style);
    `);
        })
      
  
  });
