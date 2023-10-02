const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
    text : String,
    userId : String,
    postId : String,
    like : Number,
    createAt : Date,
}) 

module.exports = mongoose.model('Comments', Comment)