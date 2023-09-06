const express= require('express')
const app=express();

app.get("/",(req,res)=>{
    res.send("This is home page")
    console.log("Home page")
})
app.listen(8000,()=>{
    console.log("Hello server")
})