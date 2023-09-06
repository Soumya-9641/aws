// const add= require('./cal');

// const x=50,y=40;


// console.log("addition of 50 and 40 is",add(x,y));


const http= require('http');

http.createServer((req,res)=>{
        res.write("Helo World");
        res.end();
}).listen(8000);