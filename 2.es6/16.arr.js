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
// let a=arr.myReduce((prev,next,currentIndex,arr)=>{
//     console.log(currentIndex)
//     return prev+next
// })
// console.log(a)

// filter true留下 false丢掉

// for(let item of Object.values({a:1,b:2,c:3}))console.log(item)

// Symbol number string boolean null undefined object

let s=Symbol.for('zzz');//永远唯一 作为常量
console.log(Symbol.keyFor(s))