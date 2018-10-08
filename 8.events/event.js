function EventEmitter (){
    this._events={}
}
EventEmitter.prototype.on=function(eventName,callback){
        if(!this._events)this._events=Object.create(null);
        if(eventName!== 'newListener'){
            if(this._events['newListener']){
                this._events['newListener'].forEach(fn=>{
                    fn(eventName)
                })    
            }
        }
        if(this._events[eventName]){
            this._events[eventName].push(callback);
        }else{
            this._events[eventName]=[callback]
        }
}
EventEmitter.prototype.emit=function(eventName,...args){
    if(this._events[eventName]){
        this._events[eventName].forEach(element => {
            element.apply(this,args);
        });
    }
}
module.exports=EventEmitter