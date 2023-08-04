require("dotenv").config();

const app = require('express')();
var http = require('http').Server(app);
const nodemailer = require('nodemailer');
const express = require('express');

const cors = require('cors');
app.use(cors());
app.use(express.json());

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kushalhts00@gmail.com', // Replace with your Gmail email address
      pass: 'tahgrshrqdezqqsq', // Replace with your Gmail password or an app-specific password
    },
  });
  
  // Endpoint to send email
  app.post('/send-email', async (req, res) => {
    try {
      console.log(req.body)
      const { to, subject, text } = req.body;
      // const to = req.body.to;
      // const subject =req.body.subject;
      // const text =req.body.text;
  
      if (!to || !subject || !text) {
        return res.status(400).json({ error: 'Missing required parameters' });
      }
  
      // Email content
      const mailOptions = {
        from: 'kushalhts00@gmail.com', // Replace with your Gmail email address
        to,
        subject,
        text,
      };
  console.log(mailOptions)
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.messageId);

      // if(req.body.order === "1"){
            
      //   const mailOptions = {
      //     from: 'kushalhts00@gmail.com', // Replace with your Gmail email address
      //     to,
      //     subject,
      //     text,
      //   };
    
      //   // Send the email
      //   const info = await transporter.sendMail(mailOptions);
      //   console.log('Email sent: ', info.messageId);

      // }
  
      return res.json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email: ', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  });

http.listen(8000, function(){
    console.log('Server is running');
});