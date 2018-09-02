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
    "./src/1.js":
      (function (module, exports) {
        eval("module.exports = 'chengjianshabi '\n\n//# sourceURL=webpack:///./src/1.js?");
      }),
    "./src/index.js":
      (function (module, exports, __webpack_require__) {

        eval("let result = __webpack_require__(/*! ./1.js */ \"./src/1.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

      })
  });