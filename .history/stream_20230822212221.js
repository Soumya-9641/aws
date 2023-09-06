// var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('text.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");

var fs= require('fs');
var data = "Hello World.Output file";

var writeStream =fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');

writeStream.end();
writeStream.on('finish',()=>{
    console.log("Work completed");
})

writeStream.on('error',(err)=>{
    console.log(err);
})

console.log("program ended");