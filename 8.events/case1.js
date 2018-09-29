let EventEmitter = require('./events');
function Gril(){
    
}
let g = new Gril()
Object.setPrototypeOf(Gril.prototype,EventEmitter.prototype);
let fn =()=>{console.log('hq')}
g.on('ns',)