function middleware(req,res,next){
    console.log('hello i am a middleWare2')
    next()

}
module.exports ={
    middleware2:middleware
}