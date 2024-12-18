const express = require("express")

const app = express()

// there various api methods like get,put,post,delete
// we use these for the restful apis 
// we use nodemon why it automaticallu restarts the server when ever a upadte made
// to use nodemon first install nodemon npm i nodemon then it will take care the server 
// restarting policies etc.......
// instead node js use nodemon filename js

// app.get('/',(req,res)=>{
//     res.send("hello i am get method")
// })
// app.get("/about" ,(req,res)=>{
//     res.send("heloo i am updated get")
// })

// app.get("/json",(req,res)=>{
//     res.json({message:"hello",status:"yes json"})
// })
// app.get("/json1",(req,res)=>{
//     res.json({message:"hello",status:"yes 2 json"})
// })
// app.get("/jsonup",(req,res)=>{
//     res.json({message:"hello",status:"up json"})
// })


// app.get("/htmltag",(req,res)=>{
//     res.send("<p><b>hello welcome to get methods</b></p>")

// })
// app.get("/html1",(req,res)=>{
//     res.send("<p style=color:yellow><b>hello welcome to get methods</b></p>")

// })

//     app.get("/re",(req,res)=>{
//         setTimeout(()=>{
//             res.redirect("/html1")
//         },2000)
//     })

// app.get("/htmltag2",(req,res)=>{
//     res.send(`<p><b style="color:red;background-color:blue" >hello welcome to get methods</b></p>`)

// })
// app.get("/2",(req,res)=>{
//     res.send("<p><b>hello welcome to get methods 2 whole nodemon manages</b></p>")

// })
// app.get("/acc",(req,res)=>{
//     res.send("<p><b>hello welcome to get methods 2 whole nodemon manages</b></p>")

// })

// // const port = process.env.PORT || 2000;
// //  for dynmaicallu port value becos in
// // aws when we hoist the app the port number get there by the aws so we 
// // need to set an dynamic port

// // route parameter;

// let itm = [{
//     id:1,
//     name:"hello"
// },{
//     id:2,
//     name:"hello",
// }]
// app.get("/about/itm/:itmID?",(req,res)=>{
//     const requestID = req.params.itmID ? parseInt(req.params.itmID) :null;

//     if(requestID){
//         const requestitm = itm.find((item)=>item.id===requestID)
//         if(requestitm){
//             res.json(requestitm)
//         }
//         else{
//             res.send("something check id or the code")
//         }
//     }
//     else{
//         res.json(itm)
//     }
// })

// app.listen(port,()=>console.log("port running"))
const port = process.env.PORT || 2000;

app.listen(port ,()=>{console.log("port is running")})

const course = [{id:1,name:"venky"},{id:2,name:"kiruthika"}]

app.get("/courses/:id?",(req,res)=>{
    const requestID = parseInt(req.params.id) 
    const req_course = course.find((courses)=>courses.id===requestID)
    if(requestID){
        if(req_course){
            res.send(req_course)
        }
        else{
            res.status(404).send("no courses")
        }
    }
    else{
        res.send(course)
    }
})