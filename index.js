var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chandangowda2422@gmail.com',
    pass: 'wwji mwpy wqlj brjs'
  }
});

var mailOptions = {
  from: 'chandangowda2422@gmail.com',
  to: ['rc160098@gmail.com'],
  subject: 'Sending Email using Node.js',
  text: 'from chandan R',
  html: '<h1>hello everyone</h1>',
  attachments: [
    {
      filename: 'h1.jpeg',
      path: './h1.jpeg', // Path to the file
    },
    {
        filename: 'example.txt',
        path: './example.txt', 
      },
      {
        filename: 'h2.pdf',
        path: './h2.pdf', 
      },
  ],
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});