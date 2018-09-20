let a =(a,b)=>{return a+b};
let babel = require('babel-core');
let t = require('babel-types')
let code ='let a =(a,b)=>{return a+b}';
let ArrowFunctions={
    visitor:{
       ArrowFunctionExpression(path){
            let node = path.node;
           let fns=t.functionExpression(null,node.params,node.body)
            path.replaceWith(fns)
        },
        VariableDeclaration(path){
            let node = path.node;
            node.kind ='var';
            path.replaceWith(node)
        }
    }
}
let r=babel.transform(code,{
    plugins:[
        ArrowFunctions
    ]
})
console.log(r.code)