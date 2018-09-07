function Yf(options = {}) {
    this.$options = options;
    var data = this._data = this.$options.data
    observe(data);
    // 代理
    for (let key in data) {
        Object.defineProperty(this, key, {
            enumerable: true,
            get() {
                return this._data[key]
            },
            set(newVal) {
                this._data[key] = newVal
            }
        })
    }
    new Compile(options.el, this)
}
function Compile(el, vm) {
    // app 中的内容移入内存当中
    vm.$el = document.querySelector(el);
    let fragment = document.createDocumentFragment();
    while (child = vm.$el.firstChild) {
        fragment.appendChild(child);
    }
    replace(fragment)
    function replace(fragment) {
        Array.from(fragment.childNodes).forEach((item, index) => {
            let _test = item.textContent;
            let reg = /\{\{(.*)\}\}/;
            if (item.nodeType == 3 && reg.test(_test)) {
                let arr = RegExp.$1.split('.');
                console.log(arr)
                let val = vm;
                arr.forEach(key => {
                    val = val[key];
                })
                // tihuan luoji
                new Watcher(vm,RegExp.$1,function(newVal){//xuyao yige xinzhi
                    item.textContent = _test.replace(/\{\{(.*)\}\}/, newVal)
                })
                item.textContent = _test.replace(/\{\{(.*)\}\}/, val)
            }
            if(item.nodeType===1){
                let nodeAttrs = item.attributes;
                Array.from(nodeAttrs).forEach((attr)=>{
                    let name = attr.name;
                    let exp = attr.value;
                    if(attr.indexOf('f-')==0){
                        item.value = vm[exp]
                    }
                    new Watcher(vm,exp,function(newVal){
                            item.value = newVal;
                    });
                    item.addEventListener('input',function(e){
                        let newVal = e.target.value;
                        vm[exp]= newVal;
                    })
                })
            }
            if (item.childNodes) {
                replace(item)
            }
        })
    }
    vm.$el.appendChild(fragment);
}
function Observe(data) {
    for (let key in data) {
        let val = data[key];
        observe(val)
        Object.defineProperty(data, key, {
            enumerable: true,

            get() {
                return val;
            },

            set(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal
                observe(val)
            }
        });
    }
}
function observe(data) {
    if (typeof data !== 'object') {
        return;
    }
    return new Observe(data)
}

function Dep(){
    this.subs=[];
}
Dep.prototype.addSub=function(sub){
    this.subs.push(sub)
}
Dep.prototype.notify=function(){
    this.subs.forEach(sub=>sub.update())
}
function Watcher(vm,exp,fn){
    this.fn = fn;
    this.vm = vm;
    this.exp = exp; //tian jia dao dingyuezhong
    Dep.target = this;
    let val = vm;
    let arr = exp.split('.');
    arr.forEach(function(k){
        val=val[k]
    });
    Dep.target =null;
}
Watcher.prototype.update =function(){
        this.fn()
}
