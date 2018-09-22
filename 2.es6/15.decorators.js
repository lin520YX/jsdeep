// 装饰器 mobx react库
// 装饰器模式 包装

//能够使用在那里，类上面使用，包装原型上得方法，类中的属性 

// function coffee(){

// }
// function sweetCoffee(){
//     coffee()
// }
// function milkCoffee(){
//     sweetCoffee()
// }
// 3)原型上
 class Person{
     @add
     eat(){

     }
 }
 function add(target,key,descriptor){
    console.log(descriptor)
    let oldEat=descriptor.value;
    descriptor.value=function(){
        oldEat()
        console.log('end')
    }
 }
 let p= new Person()
 p.eat()

// 2）类上的属性
// class Circle{
//     @readonly PI=3.14
// }
// function readonly(target,key,descriptor){
//    console.log(descriptor)
// }

// 不能包装函数 @ es7
// 1)类的写法
// @flag class Animal{
//     a=1
// }
// function flag(type){
//     this.type=type;
// }
// let a=new Animal()
// console.log(a.a)