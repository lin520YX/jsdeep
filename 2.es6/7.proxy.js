let obj = { name: 'lyf' }
obj['name'] = 'lyf';// 不能在发生修改时候干事
// 第三个参数 属性描述器皿
let val = 3.14
Object.defineProperty(obj, 'PI', {
    enumerable: true,
    configurable: false,//是否可以配置
    get() {
        return val
    },
    set(v) {
        val = v
    }
})
obj.PI = 3.17
console.log(obj) //拦截 代理 vue 为了能够监控到
console.log(val)