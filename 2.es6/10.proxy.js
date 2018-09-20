let obj ={name:{name:'lyf'}};
obj.name.name='yx';
function set(obj,callback){
    let proxy = new Proxy(obj,{
        set(target,key,value){
            if(key==='length')return true;
            return Reflect.set(target,key,value)
        },get(target,key){
            return Reflect.get(target,key)
        }
    })
    callback(proxy)
}
set(obj.name,function(proxy){
    proxy.name='lyf'
})


// digui
// 不能从父级开始代理（如果代理了儿子会把结果挂到父级，那此时会出发父级的set方法）
// 如何加set和get方法
function deepProxy(obj){
    for(let key in obj){
        let val=obj[key];
        if(typeof val === 'object'){
            obj[key]=deepProxy(val)
        }
    }
}
deepProxy(obj)