const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    text : String,
    userId : String,
    like : Number,
    share : Number,
    createAt : Date,
    img : String,
}) 

module.exports = mongoose.model('Posts', Post)