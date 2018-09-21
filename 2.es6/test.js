'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

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
var Person = (_class = function () {
    function Person() {
        _classCallCheck(this, Person);
    }

    _createClass(Person, [{
        key: 'eat',
        value: function eat() {}
    }]);

    return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, 'eat', [add], Object.getOwnPropertyDescriptor(_class.prototype, 'eat'), _class.prototype)), _class);

function add(target, key, descriptor) {
    console.log(descriptor);
    var oldEat = descriptor.value;
    descriptor.value = function () {
        oldEat();
        console.log('end');
    };
}
var p = new Person();
p.eat();

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
