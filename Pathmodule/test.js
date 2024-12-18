const { exec } = require("child_process");
const path = require("path");
const filePath = "C:\\Users\\shriv\\Desktop\\Node.js\\Pathmodule\\if.txt";

const extension = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log("File Extension:", extension);
console.log("Base Name:", basename);
console.log("Directory Name:", dirname);

console.log(__dirname)
console.log(__filename)





// Execute child process
// exec("node test.js", (error, stdout, stderr) => {
//     if (error) {
//         console.log("Error:", error.message);
//         return;
//     }
//     if (stderr) {
//         console.error("Standard Error:", stderr);
//         return;
//     }
//     console.log("Hello, I am child process. Output:", stdout);
// });
