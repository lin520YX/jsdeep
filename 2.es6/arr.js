// filter forEach map reduce some every


let arr= [1,2,3,4];
Array.prototype.myReduce=function(callback,prev){
    for(let i=0;i<this.length;i++){
        if(!prev){
            prev=callback(this[i],this[i+1],i+1,this);
            i++
        }else{
            prev=callback(prev,this[i],i,this)
        }
    }
    return prev;
}
let a=arr.myReduce((prev,next,currentIndex,arr)=>{
    console.log(currentIndex)
    return prev+next
})
console.log(a)
