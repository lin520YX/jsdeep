// 前端又一个window对象 在浏览器中window代理了global
// 我们访问时是window

// node中没有window 可以直接获取global 全局

// window.a=1;

// 挂在global 上的属性就是我们可以直接获取的

console.log(global)

// this 其实是node 运行文件时修改了this 的指向

//  通过var 声明的属性不会挂载到 global上

// 一般情况下不会在global上挂属性