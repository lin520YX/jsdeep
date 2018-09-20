function _classCallCheck(ins,Constructor){
    if(!(ins instanceof Constructor)){
        throw new Error('without new')
    }
}
function _createClass(constructor,properties,staticProperties){
    if(properties.length>0){
        defineProperties(constructor.prototype,properties)
    }
    if(staticProperties.length>0){
        defineProperties(constructor,properties)
    }
}
function defineProperties(target,properties){
    for(let i=0;i<properties.length;i++){
        Object.defineProperty(target,properties[i].key,{
            enumerable:true,
            configurable:true,
            ...properties[i]
        })
    }
}
var Animal=function(){
    function Animal(type){
        _classCallCheck(this,Animal)
    }

    _createClass(Animal,[{
        key:'drink',
        value:function(){
            console.log('heshui')
        }
    }],[{
        key:'drinks',
        value:function(){
            console.log('heshui')
        }
    }])
    return Animal;
}();
let a= new Animal();
console.log(a.drink())