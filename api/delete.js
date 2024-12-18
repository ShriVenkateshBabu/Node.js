const express = require("express")
const app = express()
const port = process.env.PORT ||3000;
app.listen(port,()=>console.log("port running success"))

//get method - html,json,redirect,text

app.get("/",(req,res)=>{
    res.send("hello i am the get home")
})

//multiple routing
const stu =[
    {
        id:1,name:"venkky"
    },
    {
       id:2,name:"kiruti"
    }
]
app.get("/stu/:id?",(req,res)=>{
    let id = parseInt(req.params.id);
    let req_stu = stu.find((stu)=>stu.id===id)
    if(id){
        if(req_stu){
            res.send(req_stu)
        }
        else{
            res.send("no stu enrolled in that id")
        }
    }else{
        res.send(stu)    
    }
})

//post method mean create in crud
app.use(express.json())
app.post('/stu',(req,res)=>{
   let new_id = stu.length ?stu[stu.length-1].id + 1:1.
   let new_stu = {
    id:new_id,
    name:req.body.name
   }
   stu.push(new_stu)
   res.send(stu)  
})
// to update the exisiting value 
// with replace of this 

app.put("/stu/:id?",(req,res)=>{
    const put_id = parseInt(req.params.id);
    const put_obj = stu.find((stu)=>stu.id===put_id)
    put_obj.name = req.body.name
    res.send(stu)
})
app.delete("/stu/:id?",(req,res)=>{
    
    let id = parseInt(req.params.id)
    let stu_req = stu.find((stud)=>stud.id===id)
    if(!stu_req){
        res.send("no stu to delete in that id")
    }    
    let index = stu.indexOf(stu_req)
    stu.splice(index,1)
    // let id = parseInt(req.params.id)
    // const fil_stu = stu.filter((stud)=>stud.id!==id)
    // res.send(fil_stu)
})
