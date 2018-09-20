let obj ={name:{name:'lyf'}};
function observer(obj){
    if(typeof obj!='object')return obj;
    for(let key in obj){
        // 定义响应式 重写
            defineReactive(obj,key,obj[key])
    }
}
function defineReactive(obj,key,value){
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(v){
            console.log('gx')
            value=v
        }
    })
}
observer(obj)
obj.name='yx'
console.log(obj.name)
