import mongoose, { Schema } from "mongoose";

const UserScheme = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    createdAt:{
        type:String,
        required: true
    },
    updatedAt:{
        type:String,
        required: true
    },
})

const UserModel = mongoose.model('users',UserScheme)

export default UserModel;