// 高阶函数： 函数当作参数传递，函数返回一个函数 满足一个就叫做 高阶函数
// 偏函数： 参数不定向 柯里化 redux

// function a(a,b){
//     return function (b){
//             return function (c){

//             }
//     }
// }

// after lodash
function after(times,callback){
   if(--times==0){
        return function(){
            callback()
        }
   }
}
let fn=after(3,function(){
    console.log('after 3')
})

// 处理异步 多个异步请求同时执行，在某一个时间点，获取她们的节点
// a接口 想要获取 数据内容 姓名
// b接口 想要获取 数据内容 年龄
