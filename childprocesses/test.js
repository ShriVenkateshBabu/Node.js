// const { execSync } = require("child_process");

// // Execute a command and inherit stdio
// try {
//     const output = execSync("calc", { stdio: 'inherit', encoding: 'utf8' });
//     console.log("Command executed successfully.");
// } catch (error) {
//     console.error("Error:", error.message);  // Handle errors
// }

// const {exec} = require("child_process")
// exec("cac",(error,stdout,stderr)=>{
//    if(error){
//     console.error(error.message)
//    }
//    if(stderr){
//     console.log(stderr)
//    }
//    console.log("calculator opened")
// })


// const {exec, execSync} = require("child_process")

// console.log("output" + execSync("node sample.js"))
// output will be a buffer automatically converts in to str like type coerison str plus anything 
//converts to str

// const buffer = Buffer.from('Hello, World!', 'utf8');  // Create a buffer from a string

// console.log(buffer);  // Prints <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
// console.log(buffer.toString('utf8'));  // Prints Hello, World!

// const { exec, execSync } = require("child_process");

// // Run node with sample.js
// exec("node sample.js", (error, stdout, stderr) => {
//     if (error) {
//         console.error(`Error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.error(`stderr: ${stderr}`);
//         return;
//     }
//     console.log( stdout);  // Print the output of sample.js
// });

// console.log(execSync("node sample.js").toString("utf8"))

// const cp = require("child_process")
// cp.exec("echo Hello" ,(error,stdout,stderr)=>{
//     if(error){
//         console.log(error.message)

//     }
//     if(stderr){
//         console.log(stderr.error)
//     }
//     console.log(stdout)
// })
// console.log(cp.execSync("echo hello").toString())


// cp.exec("dir", (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     if (stderr) {
//         console.error(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(stdout);  // Log the output
// });



const { execSync } = require('child_process');

// Execute a command synchronously with custom options

// const cp = require("child_process");

// cp.execFile("node", ["sample.js"],(error,stdout,stderr)=>{
//     if(error){
//         console.log(error.message)
//     }
//     if(stderr){
//         console.log(stderr.message)
//     }
//     console.log(stdout)
// })
