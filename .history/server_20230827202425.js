const express= require('express')
const app=express();


app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("This is home page")
    console.log("Home page")
})
app.listen(8000,()=>{
    console.log("Hello server")
})