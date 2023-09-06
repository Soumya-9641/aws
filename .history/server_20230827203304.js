const express= require('express')
const app=express();
const path= require("path")
const multer  = require('multer')

const upload = multer({dest:"uploads/"})
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
app.use(express.urlencoded({extended:false})); 
app.get("/",(req,res)=>{
   return res.render("homepage")
})
app.post("/upload",upload.single("profileImage"),(req,res)=>{
    console.log(req.body); 
    console.log(req.file);
    return res.redirect("/")
})
app.listen(8000,()=>{
    console.log("Hello server")
})