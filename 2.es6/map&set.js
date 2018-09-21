// map set 一中数据结构
//set 可以做去重 set中不能放重复的
let set = new Set([1,1,2,2,3,4])
console.log([...set])
console.log(
    set.has(1))

// 求并集
let arr1=[1,2,3];
let arr2=[4,5,6];
function union(arr1,arr2){
    return new Set([...arr1,...arr2])
}
union(arr1,arr2)

// 交集
function insection(arr1,arr2){
   let set1=new Set(arr1);
   let set2=new Set(arr2);
   return [...set1].filter(item=>set2.has(item))
}
insection(arr1,arr2)

// 差集
function difference(arr1,arr2){
    let set1=new Set(arr1);
    let set2=new Set(arr2);
    return [...set1].filter(item=>!set2.has(item))
 }
 difference(arr1,arr2)



 let map=new Map();
 map.set('js','123');
 console.log(map.get('js'))
