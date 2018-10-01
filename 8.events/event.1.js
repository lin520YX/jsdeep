function EventEmitter (){
    this._events={}
}
EventEmitter.prototype.on=function(eventName,callback,flag){
        if(!this._events)this._events=Object.create(null);
        if(eventName!== 'newListener'){
            if(this._events['newListener']){
               this._events['newListener'].forEach((fn)=>{
                    fn(eventName)
               })
            }
        }
        if(this._events[eventName]){
            if(!flag){
                this._events[eventName].push(callback);
            }else{
                this._events[eventName].unshift(callback);
            }
            
        }else{
            this._events[eventName]=[callback]
        }
}
EventEmitter.prototype.prependListener=function(eventName,callback){
    this.on(eventName,callback,true)
}
EventEmitter.prototype.once=function(eventName,callback){
    let one =function(){
            callback();
            this.removeListener(eventName,one)
    }
    one.g= callback;
    this.on(eventName,one);
    
}
EventEmitter.prototype.removeListener=function(eventName,callback){
   this._events[eventName] = this._events[eventName].filter(item=>{
        return item!=callback&&item.g==callback;
    })
}
EventEmitter.prototype.emit=function(eventName,...args){
    if(this._events[eventName]){
        this._events[eventName].forEach(element => {
            element.apply(this,args);
        });
    }
}
module.exports=EventEmitter