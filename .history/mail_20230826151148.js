const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "soumyadip.ewp@gmail.com",
        pass: "Gantait@9641.76#$"
    }
})

let details = {
    from: "soumyadip.ewp@gmail.com",
    to: "soumyadipgantait2003@gmail.com",
    subject: "Hello nodemailer",
    text: "hello"
}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('data send');
    }
})