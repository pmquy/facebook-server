const comment = require('./comment')
const Post = require('../models/Post')
const image = require('./image')

const findPostByID = async id => {
    let res = {};
    await Post.findById(id)
        .then(val => res = val)
        .catch(err => {})
    return res;
}
const deletePostByID = async id => {
    let res = {};
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

const findPosts = async (queries) => {
    let res = [];
    await Post.find(queries).sort({createAt : -1})
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const deletePosts = async (queries) => {
    let res = {};
    const posts = await Post.find(queries)
    for(const post of posts) {        
        await deletePostByID(post._id);
    }
}

const updatePostById = async (id, queries) => {    
    let res = {};
    await Post.findByIdAndUpdate(id,queries, {new:true})
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const updatePosts = async (queries) => {
    let res = {};
    await Post.updateMany(queries)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

module.exports = {findPostByID, deletePostByID, createPost, findPosts, updatePosts, updatePostById, deletePosts}