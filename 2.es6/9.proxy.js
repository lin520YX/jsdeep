let obj ={name:'yyy',age:{age:9}};
// proxy 可以把对象进行代理 加上特定的功能
// reflect 反射

let proxy = new Proxy(obj,{
    set(target,key,value){
        if(key==='length')return true;
        return Reflect.set(target,key,value)
    },
    get(target,key){
        return Reflect.get(target,key)
    }
})
proxy.name=123;
console.log(proxy)
// 如何实现多层代理
