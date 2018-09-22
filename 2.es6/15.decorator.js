// mobx react库
// 装饰器模式 包装

// function coffee(){

// }
// function sweetCoffee(){
//     coffee()
// }
// function milkCoffee(){
//     sweetCoffee()
// }

// 使用在哪里 类上使用包装类 包装类中的属性
// 不能包装函数 @ es7

@flag class Animal{

}
function flag(target){//指代 包装的那个人
    target.flag='dongwu'
}