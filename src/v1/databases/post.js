const comment = require('./comment')
const Post = require('../models/Post')
const image = require('./image');
const { deleteUserLikePost } = require('./userLikePost');

const findPostByID = async id => {
    let res = {};
    await Post.findById(id)
        .then(val => res = val)
        .catch(err => {})
    return res;
}
const deletePostByID = async id => {
    let res = {};
    await deleteUserLikePost({postId : id});
    await Post.findByIdAndDelete(id)
        .then(val => {res = val; return val})
        .then(val => {if(val.img) return image.deleteImageById(val.img)})
        .then(() => comment.deleteComments({postId : id}))
        .catch(err => {});
    return res;
}

const createPost = async(post) => {
    let res = {}    
    await Post.create({like : 0, share : 0, createAt : Date.now(), ...post})
        .then(val => res = val)        
        .catch(err => {})
    return res
}

const findPosts = async (query) => {
    let res = [];
    await Post.find(query).sort({createAt : -1})
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const deletePosts = async (query) => {
    let res = {};
    const posts = await Post.find(query)
    for(const post of posts) {        
        await deletePostByID(post._id);
    }
}

const updatePostById = async (id, query) => {    
    let res = {};
    await Post.findByIdAndUpdate(id,query, {new:true})
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const updatePosts = async (query) => {
    let res = {};
    await Post.updateMany(query)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

module.exports = {findPostByID, deletePostByID, createPost, findPosts, updatePosts, updatePostById, deletePosts}