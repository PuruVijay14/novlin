const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');

const SendUserCreatedMail = functions.auth.user().onCreate(async user => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'awesomepuruvj@gmail.com',
            pass: 'iopenattheendalways'
        }
    });

    const mailOptions = {
        from: 'noreply@novl.in', // sender address
        to: 'awesomepuruvj@gmail.com', // list of receivers
        subject: `${user.displayName} signed up!`, // Subject line
        html: `
        Name: ${user.displayName}<br>
        email: ${user.email}<br>
        Photo: <a href="${user.photoURL}">Link</a><br>
        `// plain text body
    };

    return await transporter.sendMail(mailOptions, async (err, info) => {
        console.log(info);
    });

});

exports.SendUserCreatedMail = SendUserCreatedMail;