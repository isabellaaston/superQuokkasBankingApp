import User from '../models/user.model';

const transferMoney = (senderId, receiverId, amount) => {
    User.updateOne({userID: senderId}, {$inc:{balance: ~amount}})
    User.updateOne({userID: receiverId}, {$inc:{balance: amount}})
}

export default transferMoney;