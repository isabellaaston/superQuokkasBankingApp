import mongoose from "mongoose"
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    friends: {
        type: Array,
        required: false
    }
});



const User = mongoose.model("User", UserSchema, 'Users'); // <Name, Schema, Collection Name>

export default User;