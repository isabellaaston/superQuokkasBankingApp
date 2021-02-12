import transferMoneyService from '../services/transferMoney.service'

export default (req, res) => {
    const senderId = req.oidc.user.sub;
    const receiverNickname = req.body.receiverNickname;
    const amount = req.body.amount;
    console.log(senderId)
    console.log(receiverNickname)
    console.log(amount)
    if (!senderId || !receiverNickname || !amount) return res.status(412).send("Invalid request body")
    transferMoneyService(senderId, receiverNickname, amount)
    return res.send('done');
}