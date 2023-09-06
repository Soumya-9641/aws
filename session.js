const cookieParser = require('cookie-parser');
const express = require('express');


const app=express();
const session = require("express-session");
app.use(cookieParser());
app.use(session({
    resave:true,
    saveUninitialized: true,
    secret:"secret"
}))
const user=({
    name:"soumya",
    age: 20,
    nationality:"Indian"
})


app.get("/login",(req,res)=>{
    req.session.user=user;
    req.session.save();
  return   res.send('User logged in');
})

app.get("/user",(req,res)=>{
    return res.send(req.session.user);
})

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("Logged out");
})

app.listen(8000,()=>{
    console.log("app is running on port 8000");
})