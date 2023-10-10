const mongoose = require('mongoose');
const UserLikePost = new mongoose.Schema({
    userId : String,
    postId : String,
    createAt : Date,
})

module.exports = mongoose.model("UserLikePost", UserLikePost)