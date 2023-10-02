const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Message = new Schema({
    text : String,
    userId : String,
    createAt : Date,
})

module.exports = mongoose.model('Messages', Message);