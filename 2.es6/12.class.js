// es5 中构造函数 开头字母大写 就叫做类
function Animal(type){
    this.type=type
}
Animal.prototype.eat=function(){
    console.log('eat')
}
function Cat(type){
    Animal.call(this,type);//让父类在子类中执行，并且this指向子类
}

let animal1= new Animal('哺乳类');
let animal2= new Animal('哺乳类');

// // 1 只继承父类实例上的属性
// let cat = new Cat('哺乳类')
// console.log(cat.type)
// console.log(cat.eat())

// 2.集成实力上和圆形上的方法 不采用
// Cat.prototype=new Animal()

// 3.集成实力上和圆形上的方法

// Cat.prototype.__proto__= Animal.prototype
// let cat = new Cat('buru');
// console.log(cat.type)
// console.log(cat.eat())

// 4.集成实力上和圆形上的方法
Cat.prototype=Object.create(Animal.prototype);
let cat = new Cat('buru');
console.log(cat.type)
console.log(cat.eat())


