const bodyParser = require('body-parser')

const transferMoney = (senderId, receiverId, amount, db) => {
    db.updateOne({id: senderId}, {$inc:{balance: ~amount}})
    db.updateOne({id: receiverId}, {$inc:{balance: amount}})
}

module.exports = bodyParser, (req, res) => {
    senderId = req.body.user.userId;
    receiverId = req.body.friend.userId;
    amount = req.body.amount;
    db = "???";
    transferMoney(senderId, receiverId, amount, db);
    res.status(200).redirect('back');
    res.status(500).send("There was an issue with this transfer");
}