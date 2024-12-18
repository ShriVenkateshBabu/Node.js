const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.listen(port,()=>console.log("port is running"))

app.get("/",(req,res)=>{
    res.send("welcome home page")
})


const items = [
    {
       id:1,name:"shoe"
    },
    {
       id:2,name:"dress"
    },
    {
       id:3,name:"pants"
    }
]
app.get("/items/:id?",(req,res)=>{
    const requestID = parseInt(req.params.id)
    const request_item = items.find((itms)=>itms.id===requestID)
    if(requestID){
      if(request_item){
         res.send(request_item)
      }
     else{
         res.status("404").send("no citm in that id")
      }
    }
    else{
    res.send(items)
    }
})

// use middleware to connect to http request to another
app.use(express.json())
app.post("/items",(req,res)=>{
    const item_id = items.length ? items[items.length-1].id + 1 : 1;
    const new_item = {id:item_id,name:req.body.name}
    items.push(new_item)
    res.send(new_item)
})