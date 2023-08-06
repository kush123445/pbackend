require("dotenv").config();

const pdfKit = require('pdfkit');
const fs = require('fs');
const app = require('express')();
var http = require('http').Server(app);
const nodemailer = require('nodemailer');
const express = require('express');


const cors = require('cors');
app.use(cors());
app.use(express.json());

const paymentRoute = require('./routes/paymentRoute');
const createPdf = require("./invoice");
// app.get('/invoice', async(req, res) => {
//   // Sample invoice data (replace with your actual invoice data)
  
//     // Your invoice data here...
   
//       try {
//         const result = await easyinvoice.createInvoice(data);
    
//         fs.writeFileSync(`./invoice/invoice-${Date.now()}.pdf`, result.pdf, 'base64');
//         console.log('Invoice created successfully!');
//       } catch (error) {
//         console.error('Error while generating the invoice:', error);
//       }
  
  

//   // Render the invoice template with the provided data
//   res.render('invoice', { data: invoiceData });
// });

app.use('/',paymentRoute);


// const invoiceData = {
//   currency: 'USD',
//   taxNotation: 'vat', // or gst, pst, etc.
//   marginTop: 25,
//   marginRight: 25,
//   marginLeft: 25,
//   marginBottom: 25,
//   sender: {
//     company: 'Your Company',
//     address: '123 Main St, City, Country',
//     zip: '12345',
//     city: 'City',
//     country: 'Country',
//   },
//   client: {
//     company: 'Client Company',
//     address: '456 Client St, City, Country',
//     zip: '67890',
//     city: 'Client City',
//     country: 'Client Country',
//   },
//   items: [
//     {
//       quantity: 2,
//       description: 'Item 1',
//       tax: 0, // Tax percentage for this item (0 means no tax)
//       price: 10,
//     },
//     {
//       quantity: 1,
//       description: 'Item 2',
//       tax: 0,
//       price: 15,
//     },
//     // Add more items if needed
//   ],
// };



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
      createPdf(req);
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
        attachments: [
          {
            filename: 'Invoice-HomeCure.pdf', // Replace with the desired attachment filename
            path: `./files/${req.body.phone}-${req.body.name}.pdf`, // Replace with the actual path to the attachment file
          },
        ]
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