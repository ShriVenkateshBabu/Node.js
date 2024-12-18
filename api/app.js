const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
app.listen(port ,()=>{
    console.log("port is running ")
})

// to get method
app.get("/",(req,res)=>{
    res.json({id:1})
})

// Routing and Multiple routing 
app.get("/home",(req,res)=>{
    res.send("hello i am home page")
})

const stu_details = [
    {
     stu_id :1,
     name:"kiruthka"
    },
    {
     stu_id :2,
     name:"venky"
    }
]
req_id =1
console.log(stu_details.find((stu)=>stu.id===req_id))
app.get("/students/:id?",(req,res)=>{
    const req_id = parseInt(req.params.id)
    const req_stu = stu_details.find((stu)=>stu.stu_id===req_id)
    if(req_id){
       if(req_stu){
        res.send(req_stu)
       }
       else{
        res.send("check the id")
       }
    }
    else{
        res.send(stu_details)
    }
    
})

 