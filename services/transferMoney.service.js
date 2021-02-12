import User from '../models/user.model';

const transferMoney = (senderId, receiverNickname, amount) => {
    User.updateOne({ userID: senderId }, { $inc: { balance: -amount } }).exec()
    User.updateOne({ nickname: receiverNickname }, { $inc: { balance: amount } }).exec()
}

export default transferMoney;