const nodemailer= require('nodemailer');
const config    = require('../../config');

async function mailer(email,subject,body){
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config.user_email,
            pass: config.pass_email
        },
        tls:{
            rejectUnauthorized: false
        }
    });
    let info = await transporter.sendMail({
        from: '"" <viclasoftcode@gmail.com>',
        to: email,
        subject: subject,
        html: body
    });
    info.messageId
}

module.exports = {
    mailer
}