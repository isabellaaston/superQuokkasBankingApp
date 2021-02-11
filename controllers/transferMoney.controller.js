import transferMoneyService from '../services/transferMoney.service'

export default (req, res) => {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const amount = req.body.amount;
    if(!senderId || !receiverId || !amount) return res.status(412).send("Invalid request body")
    transferMoneyService(senderId, receiverId, amount)
    return res.send('done');
}