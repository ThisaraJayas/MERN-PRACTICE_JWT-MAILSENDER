import express  from "express";
import nodemailer from 'nodemailer'

const router= express.Router()

router.post('/send-email', (req,res)=>{
    const {emailto} =req.body

    if (!emailto) {
        return res.status(400).json({ message: "Recipient email is required" });
    }
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'buzzcomparison@gmail.com',
              pass: 'eefn zfpi sybv xpar '
            }
          });
          
          var mailOptions = {
            from: 'buzzcomparison@gmail.com',
            to: emailto,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.status(200).json({message:"Email send Successfull"})
            }
          }); 
   
})
export default router