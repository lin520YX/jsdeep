// events 也是核心库 不用加./

let EventEmitter = require('events');
let util = require('util');
function Girl(){
    console.log('params')
}
let cry=function(){
    console.log('params')
}

let g = new Girl();

util.inherits(Girl,EventEmitter)


g.on('newListener',(type)=>{
    console.log(type)
})
g.addListener('sl',cry)
g.on('sl',function(p){
    console.log(p)
})
console.log(g.eventNames())
console.log(g.getMaxListeners())
g.emit('sl','111111')


