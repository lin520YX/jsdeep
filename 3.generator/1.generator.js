// 生产迭代器
// 将类数组转化成数组

// function sum(){
//     let arr =[...arguments];
//     // 类数组中有迭代器，通过展开运算符变成数组
//     console.log(Array.isArray(arr))
//     console.log(arr)
// }
// sum(1,2,3)


// function sum(){
//     let arr =[...{0:1,1:2,2:3,length:3,[Symbol.iterator]:function(){
//         let len=this.length;
//         let _this=this;
//         let index=0;
//         return {
//             next(){
//                 return {done:index===len,value:_this[index++]}
//             }
//         }
//     }}];
//     // 类数组中有迭代器，通过展开运算符变成数组
//     console.log(Array.isArray(arr))
//     console.log(arr)
// }
// sum(1,2,3);

//  for(let arr of {0:1,1:2,2:3,length:3,[Symbol.iterator]:function(){
//      let len = this.length;
//      let index=0;
//      let _this=this;
//      return {
//          next(){
//              return {done:index===len,value:_this[index++]}
//          }
//      }
//  }
    
// }){
//     console.log(arr)
// }

// generator 生成迭代器
// 生成器函数 * generator 一般配合 yield

// function * read(){
//     yield 1;
//     yield 2;
//     yield 3;
//     return 100
// }
// let iterator = read()
// console.dir(iterator.next())
// console.dir(iterator.next())
// console.dir(iterator.next())
// console.dir(iterator.next())


function sum(){
    let arr =[...{0:1,1:2,2:3,length:3,[Symbol.iterator]:function * (){
        let index =0;
        while(index!=this.length){
            yield this[index++];// return {done:false,value:this[index++]}
        }
    }}];
    // 类数组中有迭代器，通过展开运算符变成数组
    console.log(Array.isArray(arr))
    console.log(arr)
}
sum(1,2,3);