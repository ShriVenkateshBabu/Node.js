function middleware(req,res,next){
    console.log('hello i am a middleWare')
    next()

}
module.exports ={
    middleware:middleware
}