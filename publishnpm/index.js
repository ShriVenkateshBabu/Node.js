function addition(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}
function rem(a,b){
    console.log(a%b)
}
function mergearr(a,b){
    let mergerarr= [...a,...b]
    console.log(mergerarr)
}
module.exports={
    add:addition,
    sub:sub,
    mul:mul,
    div:div,
    rem:rem,
    mergearr:mergearr
}