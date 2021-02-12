import nodemailer from 'nodemailer';

class Mailer {
    static sent = [];
    constructor(emailFrom){
    this.emailFrom = emailFrom;
    }

    sendEmailInvite(emailTo) {
        const email = {
            from: this.emailFrom,
            to: emailTo,
            subject: "Invite to BankingApp",
            html: `Hi there,<br/><br/>I would like to invite you to be my friend<br/><br/><a style="text-decoration:none;padding:15px;background-color:green;color:white;border-radius:3px;" href="${process.env.BASE_URL}/friends/request?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}">Accept Request</a>`,
            replyTo: "no-reply@superquokka.com"
        };
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'isabella.aston8@gmail.com',
                pass: process.env.GMAIL_PASSWORD
            }
        });
        transport.sendEmailInvite(email, (err, result) => {
            Mailer.sent.push(err || result)
        })
    };
};

export default Mailer;