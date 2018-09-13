function Promise(executor){
    let self = this;
    self.status = 'pending';
    self.value ='undefined';
    self.reason ='undefined';
    self.onResolved =[];
    self.onRejected =[];
    function resolve(value){
        if(self.status=== 'pending'){
            self.value = value;
            self.status ='resolved';
            self.onResolved.forEach(fn=> fn());
        }
    }
    function reject(reason){
        if(self.status=== 'pending'){
            self.value = reason;
            self.status ='rejected';
            self.onRejected.forEach(fn=> fn());
        }
        
    }
    try {
        executor(resolve,reject)
    } catch (error) {
        reject(error)
    }
 
}
Promise.prototype.then=function(onfulfilled,onrejected){
    let self = this;
    console.log(self.status)
    if(self.status=== 'resolved'){
        onfulfilled(self.value)
    }
    if(self.status=== 'rejected'){
        onrejected(self.reason)
    }
    if(self.status === 'pending'){
        self.onRejected.push(()=>{
            onfulfilled(self.value)
        });
        self.onRejected.push(()=>{
            onrejected(self.value)
        })
    }
}
module.exports = Promise