const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT  || 5000;
app.use(express.urlencoded({ extended: false}))
app.use(express.json());


app.use("/", express.static(path.join(__dirname, '../public')));
app.use('/message', express.static(path.join(__dirname, '../public/message.html')));



app.post('/send', function (req,res){
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: 's.albertogamarro5@gmail.com',
            pass:  process.env.PASSWORD
        }
    })

    var mailOptions = {
        from: `<${req.body.email}>`,
        to: 's.albertogamarro5@gmail.com',
        subject: 'Portfolio Contact',
        text: `New message from ${req.body.name} <br>
        Email: ${req.body.email} <br>
        Message ${req.body.message}`,
        html:`<p>New message from ${req.body.name} <br>
        Email: ${req.body.email} <br>
        Message ${req.body.message} </p>`
    };

    transporter.sendMail(mailOptions, function (error, info){
        if(error){
            console.log(error);
        }else{
            console.log('message was sent');
            res.redirect('/message')
        }
    })

})



app.listen(PORT, ()=>{
    console.log("Server is working on port" + PORT)
})