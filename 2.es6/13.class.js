// class Animal{
//     //es7 static a=1
//     //es6
//     static a(){
//         console.log('a')
//     }
//     constructor(type){
//         this.type=type
//     }
//     eat(){

//     }
// }
// new Animal('t')
// class Cat extends Animal{
//     constructor(type){
//         super(type)
//     }
// }
// console.log(new Cat('aaaa'))
// console.log(Cat.a())
function Parent(){}
Parent.a='1';
function Child(){};
Child.__proto__=Parent;
console.log(Child.a)