const fs = require("fs")

// const readfile = fs.readFileSync("1.txt")
// console.log(readfile.toString())
// // or use concat that type coersion
// console.log(" " + readfile)

// // to write a file 

// fs.writeFileSync("2.txt" ,"hello i am overwritten data")

// // if you dont have that file and you want to write something // eg
// fs.writeFileSync("4.txt" ,"i am created without file creation")


// to update a file without overwrting the pre existing data we use appendFileSync

// fs.appendFileSync('3.txt'," i am updated data without overwrttig the exsiting data")

// to delete the existing data

// fs.unlinkSync('4.txt')


// fs.unlink("3.txt",(error,stdout,stderr)=>{
//     if(error){
//         console.log(error.message)
//     }
//     if(stderr){
//         console.log(stderr.message)
//     }
//     console.log("file delete sucess")
// })
// fs.writeFile("3.txt","hello",(error,stdout,stderr)=>{
//     if(error){
//         console.log(error.message)
//     }
//     if(stderr){
//         console.log(stderr.message)
//     }
    
// })
// fs.readFile("3.txt",(error,stdout,stderr)=>{
//     if(error){
//         console.log(error.message)
//     }
//     if(stderr){
//         console.log(stderr.message)
//     }
//     console.log("" + stdout)
    
// })
fs.appendFile("3.txt","hello i am upadte word using async append",(error,stdout,stderr)=>{
    if(error){
        console.log(error.message)
    }
    if(stderr){
        console.log(stderr.message)
    }
    console.log('congrats')
    
})