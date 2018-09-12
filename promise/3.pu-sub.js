let fs=require('fs');
// 发布 订阅 发布者和订阅者没有依赖关系
// 观察者模式 发布和订阅 被观察者是以来于观察者

// 发布订阅
let dep = {
    arr:[],
    on(callback){
        this.arr.push(callback)
    },
    emit(){
        this.arr.forEach(element => {
                element()
        });
    }
}
let school = {};
dep.on(function(){
    if(Object.keys(school).length===2){
        console.log(school)
    }
});
fs.readFile('promise/age.txt','utf8',(err,data)=>{
    school['age']=data;
    dep.emit();
})
fs.readFile('promise/name.txt','utf8',(err,data)=>{
    school['name']=data;
    dep.emit();
})