const UserLikePost = require('../models/UserLikePost')
const post = require('./post')

const findUserLikePost = async query => {
    let res = {};
    await UserLikePost.find(query)
        .then(val => res = val)
        .catch(err => {});
    return res;
}

const addUserLikePost = async query => {
    let res = {};
    await UserLikePost.create({createAt : Date.now(), ...query})
        .then(val => res = val)
        .catch(err => {});
    await post.findPostByID(query.postId)
        .then(val => post.updatePostById(val._id, {like : val.like + 1}))
        .catch(err => {})
    return res;
}

const deleteUserLikePost = async query => {
    let res = {};
    await UserLikePost.findOneAndDelete(query)
        .then(val => res = val)
        .catch(err => {});
    await post.findPostByID(query.postId)
        .then(val => post.updatePostById(val._id, {like : val.like - 1}))
        .catch(err => {});
    return res;
}


module.exports = {findUserLikePost, addUserLikePost, deleteUserLikePost}