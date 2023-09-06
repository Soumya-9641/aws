const express= require('express');

const app= express();
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
 
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    
    next();  
 });

app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.get('/home', (req, res) => {
    res.send('Home Page');
  });
  app.get('/about', (req, res) => {
    res.send('About');
  });
  app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
  });
  app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });
app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})