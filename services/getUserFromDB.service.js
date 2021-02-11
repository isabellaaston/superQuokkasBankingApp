import User from '../models/user.model'

const getUserByNickname = (nickname) => {
    const nicknameRegex = new RegExp(`^${nickname.toLowerCase()}$`)
    return User.findOne({ nickname: { '$regex': nicknameRegex, $options: 'i' } })
}

const getUserById = (userID) => {
    return User.findOne({ userID })
}


export default { getUserByNickname, getUserById }