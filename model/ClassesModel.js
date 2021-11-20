require('dotenv').config()
const { MONGO_LINK } = process.env

const mongoose = require('mongoose')
const ClassesSchema = mongoose.Schema({
    title:String,
    img:String,
    registered:Boolean
})
mongoose.connect(MONGO_LINK)
module.exports = mongoose.model('classes',ClassesSchema)