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
function resolvePromise(x, promise2, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('xunhuan yinyong'))
    }
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // 处理所有的promise
        let then = x.then;
        if (typeof then === 'function') {
            then.call(x, (y) => {
                resolve(y)
            }, (e) => {
                reject(e)
            })
        } else {
            resolve(x)
        }

    } else {
        resolve(x)
    }
}
Promise.prototype.then = function (onfulfilled, onrejected) {
    let self = this;
    console.log(self.status)
    // 需要判断onfulfilled/onrejected的执行结果 和promise2的关系

    let promise2 = new Promise((resolve, reject) => {
        if (self.status === 'resolved') {
            let x = onfulfilled(self.value);
            resolvePromise(x, promise2, resolve, reject);
        }
        if (self.status === 'rejected') {
            let x = onrejected(self.reason)
            resolvePromise(x, promise2, resolve, reject);
        }
        if (self.status === 'pending') {
            self.onRejected.push(() => {
                let x = onfulfilled(self.value)
                resolvePromise(x, promise2, resolve, reject);
            });
            self.onRejected.push(() => {
                let x = onrejected(self.value)
                resolvePromise(x, promise2, resolve, reject);
            })
        }
    })
    return promise2

}
module.exports = Promise