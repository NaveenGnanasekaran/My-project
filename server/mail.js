var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'visionacademy813@gmail.com',
        pass: 'fdmatwytijnwtzdh'
    }
});

var mailOptions = {
    from: 'visionacademy813@gmail.com',
    to: 'naveengnanasekaran8@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Gnanasekaran R',
    // attachments: [
    //     {
    //         path: '\My-project\career-planning\src\images'
    //     }
    // ]
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});