function Promise(executor) {
    let self = this;
    self.status = 'pending';
    self.value = 'undefined';
    self.reason = 'undefined';
    self.onResolved = [];
    self.onRejected = [];
    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'resolved';
            self.onResolved.forEach(fn => fn());
        }
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.value = reason;
            self.status = 'rejected';
            self.onRejected.forEach(fn => fn());
        }

    }
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }

}
function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('xunhuan yinyong'))
    }
    let called;// 用来防止多次调用
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // 处理所有的promise
        let then = x.then;
        if (typeof then === 'function') {
            then.call(x, (y) => {
                if (called) return;
                called = true;
                // 递归解析 如果resolve 是一个promise 就要不停的resolve的结果 进行处理
                resolvePromise(promise2, y, resolve, reject)
            }, (e) => {
                if (called) return;
                called = true;
                reject(e)
            })
        } else {
            if (called) return;
            called = true;
            resolve(x)
        }

    } else {
        resolve(x)
    }
}
Promise.prototype.then = function (onfulfilled, onrejected) {
    let self = this;
    console.log(self.status)
    onfulfilled=typeof onfulfilled == 'function'?onfulfilled:val=>val;
    onrejected=typeof onrejected == 'function'?onrejected:err=>{
        throw err
    };
    // 需要判断onfulfilled/onrejected的执行结果 和promise2的关系

    let promise2 = new Promise((resolve, reject) => {
        if (self.status === 'resolved') {
            setTimeout(() => {
                try {
                    let x = onfulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error)
                }
            }, 0)
        }
        if (self.status === 'rejected') {
            setTimeout(() => {
                let x = onrejected(self.reason)
                resolvePromise(promise2, x, resolve, reject);
            }, 0)

        }
        if (self.status === 'pending') {
            setTimeout(() => {
                self.onRejected.push(() => {
                    let x = onfulfilled(self.value)
                    resolvePromise(promise2, x, resolve, reject);
                });
            }, 0)
            setTimeout(() => {
                self.onRejected.push(() => {
                    try {
                        let x = onrejected(self.value)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            }, 0)
        }
    })
    return promise2
}
Promise.defer= Promise.deferred=function(){
    let dfd={}
    dfd.promise=new Promise((resolve,reject)=>{
        dfd.resolve=resolve;
        dfd.reject=reject;
    })
    return dfd;
}
module.exports = Promise