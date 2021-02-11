import transferMoney from '../services/transferMoney.service';
import transferMoneyService from '../services/transferMoney.service'

export default (req, res) => {
    senderId = req.oidc.user.sub;
    receiverId = req.body.friend.userId;
    amount = req.body.amount;
    if(!senderId || !receiverId || !amount || typeof amount != Number) return res.status(412).send("Invalid request body")
    transferMoneyService(senderId, receiverId, amount)
    return res.status('back');
}