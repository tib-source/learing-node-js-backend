
so what did we learn from the 40 minute video about the node js basics: 


require("relative path to file") - how to import another module


// the way in which we access the files from a module

** inside the module ** people.js -----

people = ["jammy", "Brain", "Dylan" , "Jake"]
console.log(people) // returns ["jammy", "Brain", "Dylan" , "Jake"]

** inside another file ** index.js -----
const xyz = require("./people.js")
console.log(xyz) // returns an empty object


buttt if we did this instead : 

** inside the module ** people.js -----

people = ["jammy", "Brain", "Dylan" , "Jake"]
console.log(people) // returns ["jammy", "Brain", "Dylan" , "Jake"]
module.export(people) /* this is the key */

** inside another file ** index.js -----
const xyz = require("./people.js")
console.log(xyz) // returns ["jammy", "Brain", "Dylan" , "Jake"]


if we exprot multiple files from one module, 
  they can be accessed by using a destructuring assignement
 
 eg: 
------ people.js 
exports.getName = ()=> {return "Jim"}
exports.getAge = ()=> {return "23"}
exports.getHeight = ()=> {return "5ft"}


------ index.js
const {getName, getAge, getHeight} = require("./people.js")
getName() // returns "Jim"
getAge() // returns "23"
getHeight() // returns "5ft"



-----------------------------------------------------------------------------------------------
  
 the global object 
 
 global.setInterval("write function", time here)

the os module 
const os = require("os")
the file system module 
const fs = require("os")


how to read files 
fs.readFile("relative path to file", **function to call when file is read**)
how to write files 
fs.writeFile("relative path to file", "date to write", **function to call when writing is done**)

fs.mkdir() - creates a directory 
fs.rmdir() - deletes a directory 
fs.existsSync("fileName") - checks if file does indeed exist


i remember learning something about the stream vs buffer idea but cant fully recall what the code was. 

It was like - stream is when a file - a big file at that - is being read and its contents are sent in ckucks rather than everything at once. This is to make it so that we can start work on the data early and wastle little tile. 

fs.createReadStream()
fs.createWriteStream()

