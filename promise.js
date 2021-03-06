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
            self.reason = reason;
            self.status = 'rejected';
            self.onRejected.forEach(fn => fn());
        }

    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }

}
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用'));
    }
    let called;
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then; // 如何判断是promise 就判断又没then方法 
            if (typeof then === 'function') {
                // resolve(new Promise((resolve,reject)=>{resolve(100)})) 
                then.call(x, (y) => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, (e) => {
                    if (called) return;
                    called = true;
                    reject(e);
                });
            } else {
                resolve(x);
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}
Promise.prototype.then = function (onfulfilled, onrejected) {


    onfulfilled = typeof onfulfilled == 'function' ? onfulfilled : val => val;
    onrejected = typeof onrejected === 'function' ? onrejected : err => {
        throw err;
    }
    let self = this;
    // 需要判断onfulfilled/onrejected的执行结果 和promise2的关系
    let promise2 = new Promise((resolve, reject) => {
        if (self.status === 'resolved') {
            setTimeout(() => { // 目的是为了实现异步
                try {
                    let x = onfulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        }
        if (self.status === 'rejected') {
            setTimeout(() => {
                try {
                    let x = onrejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject); // 解析x 和 promise2的关系
                } catch (e) {
                    reject(e);
                }
            }, 0);
        }
        if (self.status === 'pending') {
            self.onResolved.push(function () {
                setTimeout(() => {
                    try {
                        let x = onfulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            });
            self.onRejected.push(function () {
                setTimeout(() => {
                    try {
                        let x = onrejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            });
        }
    })
    return promise2
}
Promise.prototype.catch = function (onrejected) {
    return this.then(null, onrejected)
}
Promise.resolve = function () {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
Promise.reject = function () {
    return new Promise((resolve, reject) => {
        reject()
    })
}
Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let i = 0;
        function processData(index, data) {
            results[index] = data;
            if (++i === promises.length) {
                resolve(results)
            }
        }
        for (let i = 0; i < promises.length; i++) {
            let p = promises[i];
            p.then((data) => {
                processData(i, data);
            }, reject)
        }
    })
}
Promise.race=function(promises){
    return new Promise((resolve,reject)=>{
        for (let i = 0; i < promises.length; i++) {
            let p = promises[i];
            p.then(resolve, reject)
        }
    })
}
module.exports = Promise