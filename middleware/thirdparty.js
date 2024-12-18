//third party middleware are the middleware we import and use in our code
//like morgan from express website
const express = require('express')
const app = express()
const morgan = require("morgan")
const middleWare1 = require("./middlewares/middle1")
const middleware2 = require('./middlewares/middle2')
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("port is Running 3000")
})

app.use(express.json())
app.use(morgan('tiny'))
app.use(middleware2.middleware2)
app.use(middleWare1.middleware)

app.get("/home" ,(req,res)=>{
    res.send("helo i am get method")
})

const posts = [{
    id:1,
    name:"venky"
},{
    id:2,
    name:"Kiruthi"
}]

app.get("/posts/:id?",(req,res)=>{
    const id =parseInt(req.params.id) 
    const req_post = posts.find((post)=>post.id===id)
    if(id){
       if(id){
          res.send(req_post)
       }else{
        res.send("not post in that id")
       }
    }
    else{
    res.send(posts)
    }
})
app.post("/posts",(req,res)=>{
    const id = posts.length ? posts[posts.length-1].id + 1 : 1;
    const new_post = {id:id, name:req.body.name}
    posts.push(new_post)
    res.send(posts)
})

app.put("/posts/:id?",(req,res)=>{
    const id =parseInt(req.params.id) 
    const req_post = posts.find((post)=>post.id===id)
    if(!req_post){
        res.send("no post to update in that id")
    };
    req_post.name=req.body.name
    res.send(posts)
})

app.delete("/posts/:id?",(req,res)=>{
    const id = parseInt(req.params.id)
    const fitlered_post = posts.filter((post)=>post.id!==id)
    res.send(fitlered_post)
})
