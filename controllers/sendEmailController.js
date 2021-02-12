import Mailer from '../models/mailer.model.js'

export default (req, res) => {
    const email = req.body.email;
    const mailer = new Mailer(req.body.sender);
    mailer.sendEmail(email);
    res.send("Invited");
}