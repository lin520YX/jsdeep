let babel = require('babel-core');
let code ='let a= 1';
let variable={
    visitor:{
        VariableDeclaration(path){
            let node = path.node;
            node.kind ='var';
            path.replaceWith(node)
        }
    }
}
let r=babel.transform(code,{
    plugins:[
        variable
    ]
})
console.log(r.code)