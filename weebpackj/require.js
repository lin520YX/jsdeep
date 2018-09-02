//define 声明模块 通过require 使用模块
// define('name',[],function(){
//     return 'chengjian'
// })
// define('age',[],function(){
//     return 1
// })
// require(['name','age'],function(name,age){

// })


let factories={};
function define(moduleName,dependencies,factory){
    factories[moduleName]=factory;
}
function require(modules,cb){
    let result=modules.map((item,index)=>{
        let factory=factories[item];
        let exports;
        exports=factory();
        return exports;
    })
    cb.apply(null,result);
}