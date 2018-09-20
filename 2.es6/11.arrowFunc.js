// function a(a){
//     return function(b){
//         return a+b
//     }
// }
let a =a=>b=>a+b;
    

console.log(a(1)(2))
// 尖头函数 没有 arguments