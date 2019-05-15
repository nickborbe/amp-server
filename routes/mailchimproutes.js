const express    = require('express');
const router = express.Router();




router.get('/test/', (req, res, next) => {

    // make api call to mailchimp
    //use node-mailchimp-v3 npm package
    
    res.status(200).json({ message: 'This exists' });
  });


 



      router.post('/contact-us', (req, res, next) => {
        let RECIPIENT;
        if (req.body.subject === "fan-mail") {
             RECIPIENT = 'whoeverTheEmailIsSupposedToGoTo@wherever.com'
        }
        // use if elses for all the possible emails b/c its the most secure way of doing it


    
            "use strict";
            const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
            async function main(){

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, 
                auth: {
                user: 'EMAIL ADDRESS HERE', 
                pass: 'PASSWORD FOR EMAIL HERE'
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"AMP AUTO EMAIL" <info@amp.com>',
                to: RECIPIENT,
                subject: "AMP AUTO EMAIL", 
                text: req.body.emailContent, // need to send this with the request from react with axios
            });

            console.log("Message sent: %s", info.messageId);
        
            }

            main().catch(console.error);


      });


      
















module.exports = router;


