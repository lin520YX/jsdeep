let arr1 =[1,2,3];
let arr2 =[1,2,3];
let arr=[...arr1,...arr2];
console.log(arr)
// 对象合并
let obj1={a:1};
let obj2 ={b:2};
let obj ={...obj1,...obj2};

// 对象拷贝 
// 深度拷贝
let school ={name:'lyf'};
let s=JSON.parse(JSON.stringify(school));
// 深度拷贝
function deepClone(obj){
    if(obj==null)return null;
    if(obj instanceof Date)return new Date(obj);
    if(obj instanceof RegExp)return new RegExp(obj);
    if(typeof obj !== 'object')return obj;
    let t=new obj.constructor;
    for(let key in obj){
        t[key]=deepClone(obj[key])
    }
    return t;
}
deepClone(school)