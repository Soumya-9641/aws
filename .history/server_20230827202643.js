const express= require('express')
const app=express();
const path= require("path")

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
app.use(express.json());
app.get("/",(req,res)=>{
   return res.render("homepage")
})
app.listen(8000,()=>{
    console.log("Hello server")
})