const mongoose = require('mongoose')
const connect = async() => {
    mongoose.connect(process.env.MONGO_URI).then(_ => console.log('Connect mongoose sucessfully'))
    .catch(err => console.log('Connect mongoose failed', err))
}

module.exports = {connect};