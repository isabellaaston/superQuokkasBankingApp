



export default (req, res) => {
    senderId = req.body.user.userId;
    receiverId = req.body.friend.userId;
    amount = req.body.amount;
    // transferMoney(senderId, receiverId, amount);
    return res.redirect('back');
}