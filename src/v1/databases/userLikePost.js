const Post = require('../models/Post');
const UserLikePost = require('../models/UserLikePost');

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
    await Post.findByIdAndUpdate(query.postId, {$inc : {like : 1}});
    return res;
}

const deleteUserLikePost = async query => {
    const arr = await findUserLikePost();
    for(let t of arr) {
        await Post.findByIdAndUpdate(t.postId, {$inc : {like : -1}});
    }
    let res;
    await UserLikePost.deleteMany(query)
        .then(val => res = val)
        .catch(err => {})
    return res;
}


module.exports = {findUserLikePost, addUserLikePost, deleteUserLikePost}