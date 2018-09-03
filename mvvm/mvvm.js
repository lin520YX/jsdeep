function Yf(options={}){
        this.$options = option;
        var data =this._data=this.$options.data
        observe(data);
}
function Observe(data){
    for(let key in data){
        let val= data[key];
        observe(val)
        Object.defineProperty(data,key,{
            enumerable:true,
            get(){
                return val;
            },
            
            set(newVal){
                if(newVal===val){
                    return;
                }else{
                    val = newVal
                }
            }
        });
    }
}
function observe(data){
    return new observe(data)
}