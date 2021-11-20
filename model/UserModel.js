require('dotenv').config()
const { MONGO_LINK } = process.env

const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    classroom:[{
        _id:String,
        title:String,
        img:String,
        registered:Boolean
    }]
})
mongoose.connect(MONGO_LINK)
module.exports = mongoose.model('users',UserSchema)