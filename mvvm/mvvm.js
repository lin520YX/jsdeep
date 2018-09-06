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
    function replace(fragment){
        Array.from(fragment.childNodes).forEach((item, index) => {
            let _test = item.textContent;
            let reg = /\{\{(.*)\}\}/ ;
            if(item.nodeType == 3 && reg.test(_test)){
                let arr = RegExp.$1.split('.');
                console.log(arr)
                let val =vm;
                arr.forEach(key=>{
                    val = val[key];
                })
                item.textContent = _test.replace(/\{\{(.*)\}\}/, val)
            }
            if(item.childNodes){
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