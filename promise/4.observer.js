// 观察者模式
class Observer{
    constructor(){
        this.val =1;
        this.arr =[];
    }
    updateVal(){
        this.val = 100;
        this.arr.forEach(s=>s.update())
    }
    save(s){
        this.arr.push(s)
    }
}
// 被观察者
class Subject{
    update(){
        console.log('update')
    }
}
let s = new Subject();
let observe=new Observer();
observe.save(s);
observe.save(s)
observe.updateVal(s)