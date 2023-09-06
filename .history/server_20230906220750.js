const express= require('express')
const app=express();
const path= require("path")
const multer  = require('multer')
require("dotenv").config();
const PORT = process.env.PORT|| 8800
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
app.use(express.urlencoded({extended:false})); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads')
      },
      filename: function (req, file, cb) {
       // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
         return  cb(null, `${Date.now()}-${file.originalname}`)
      }
})

const upload = multer({storage:storage})

app.get("/",(req,res)=>{
   return res.render("Hello aws I did it")
})
app.post("/upload",upload.single("profileImage"),(req,res)=>{
    console.log(req.body); 
    console.log(req.file);
    return res.redirect("/")
})
app.listen(PORT,()=>{
    console.log("Hello server")
})