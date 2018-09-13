let x ={

}
Object.defineProperty(x,'then',{
    get(){
        throw new Error()
    }
})