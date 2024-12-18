const express = require("express")
const app = express()
const port = process.env.PORT || 3100;
app.listen(port,()=>console.log("port running"))

//get methods -- htmltag,json,redirect,text
app.get("/",(req,res)=>{
    res.send("<p><b>hello i am get method using html tag</b></p>")
})

//multiple routing 
const shoes = [
    {
        id:1,name:"nike"
    },
    {
        id:2,name:"adidas"
    }
]
//read in crud
app.get("/shoes/:id?",(req,res)=>{
   const requested_id = parseInt(req.params.id)
   const requested_shoe = shoes.find((shoe)=>shoe.id===requested_id)
   if(requested_id){
     if(requested_shoe){
        res.send(requested_shoe)
     }
     else{
        res.status("404").send("no shoe was added in that id")
     }
   }
   else{
    res.send(shoes)
   }
    
})
// create in crud
app.use(express.json())
app.post("/shoes", (req, res) => {
    const new_shoe_id = shoes.length ? shoes[shoes.length - 1].id + 1 : 1;
    const new_shoe = { id: new_shoe_id, name: req.body.name };
    shoes.push(new_shoe);
    res.json(shoes);
});

//put method update in crud
app.put("/shoes/:id?",(req,res)=>{
    const putid = parseInt(req.params.id)
    const put_shoes_itm = shoes.find((shoe)=>shoe.id===putid)

    put_shoes_itm.name = req.body.name
    res.send(shoes)
})