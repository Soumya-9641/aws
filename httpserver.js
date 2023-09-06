const http = require('http');
const fs= require('fs');



http.createServer((req,res)=>{

    if(req.url==='/api'){
        fs.readFile('text.txt',(err,data)=>{
            if(err){
                res.writeHead(404);
                res.end("file is not found");
            }else{
                res.writeHead(200,{'content-type':'text/plain'})
                res.end(data);
            }
        })
    }
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("Helllo world")
    }

    // res.writeHead(200,{'content-type':'text/plain'});
    // res.end("Hello world");
}).listen(8800);

console.log("Server is running on port 8800");


