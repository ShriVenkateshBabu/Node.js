const fs = require('fs')
const { stdin, stderr } = require('process')

// to create a directory use mkdirSync or mkdir means makedirectory
// const ph = fs.mkdirSync("fsdir")

// To read the content inside the directory use readdirSync or readdir
// const folderpath = "C:\\Users\\shriv\\Desktop\\Node.js\\FileSystemModule\\filedir\\fsdir"
// console.log(folderpath)
// const readcontent= fs.readdirSync(folderpath)
// console.log( readcontent)
// returns an array

// to check director exsits use existsSync or exists
// const chk_dir = fs.existsSync("fsdir") // if you try get outside dir it will be false
// console.log(chk_dir)

// to delete a directroy use rmdirSync or rmdir

// const remove_dir = fs.rmdirSync("fsdir") 

// throw an error because the dirsctory should be empty
//after emptying it will delete the dir

// fs.mkdir("myasyncdir",(error,stdout,stderr)=>{
//     if(error){
//         console.log(error.message)
//     }
//     if(stderr){
//         console.log(stderr.message)
//     }
//     console.log("hello i am created the dir using async mkdir")
// })

// fs.writeFile("3.txt","hello file 2",(error,stdout,stderr)=>{
//     if(error){
//         console.log(error.message)
//     }
//     if(stderr){
//         console.log(stderr.message)
//     }
//     console.log("hello i am created the dir using async mkdir")
// })

// fs.access("myasyncdir",fs.constants.X_OK,(err)=>{
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log("file exists")
//     }
// })

// const fp = fs.accessSync("myasyncdir",fs.constants.F_OK)
// console.log(fp)

// does not return values only throws error
// for exists we have access 
// we have fs.constants.R_OK  readable file
// we have fs.constants.W_OK wrtiable file 
// we have fs.constants.X_OK excetuable file

// console.log(fs.existsSync("myasyncdir")) // true

// fs.rmdir("myasyncdir",(error,stdout,stderr)=>{
//     if(error){
//         console.log(error.message)
//     }
//     if(stderr){
//         console.log(error.message)
//     }
//     console.log("dir deleted")
// })
// console.log(fs.existsSync("myasyncdir")) // false
