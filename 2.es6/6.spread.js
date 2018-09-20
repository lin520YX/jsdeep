//   剩余运算符 把参数聚合起来
//   只能用在最后一个参数
function test(a,b,...args){
    console.log(args)
}
test(1,2,3,4,5,6)

// Object.assign()

let name={name:'lyf'};
let age ={age:9};
let obj =Object.assign(name,age)
console.log(obj);
