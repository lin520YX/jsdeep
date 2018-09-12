// node 非阻塞异步i/o 单线程
let fs=require('fs');
// error-first
let school = {};
function after(times,callback){
    return function(obj){
        if(--times===0){
            callback(obj)
        }
    }
}
let out = after(2,function(obj){
    console.log(obj)
})
fs.readFile('promise/age.txt','utf8',(err,data)=>{
    school['age']=data;
    out(school)
})
fs.readFile('promise/name.txt','utf8',(err,data)=>{
    school['name']=data;
    out(school)
})