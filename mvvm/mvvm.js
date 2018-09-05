function Yf(options={}){
        this.$options = option;
        var data =this._data=this.$options.data
        observe(data);
        // 代理
        for(let key in data){
                Object.defineProperty(this,key,{
                    enumerable:true,
                    get(){
                        return this._data[key]
                    },
                    set(newVal){
                        this._data[key]= newVal
                    }
                })
        }
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
                }
                    val = newVal
                    observe(val)
            }
        });
    }
}
function observe(data){
    return new observe(data)
}