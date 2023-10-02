const Comment = require('../models/Comment')

const findCommentByID = async id => {
    let res = {};
    await Comment.findById(id)
        .then(val => {if(val) res = val})
        .catch(err => {})
    return res;
}

const deleteCommentByID = async id => {
    let res = {};
    await Comment.findByIdAndDelete(id)
        .then(val => {if(val) res = val;})
        .catch(err => {})
    return res;
}

const createComment = async(comment) => {
    let res = {}    
    await Comment.create({like : 0, createAt : Date.now(),...comment})
        .then(val => res = val)        
        .catch(err => {})
    return res
}

const findComments = async (queries) => {
    let res = [];
    await Comment.find(queries).sort({createAt:-1})
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const deleteComments = async (queries) => {
    let res = {};
    await Comment.deleteMany(queries)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const updateCommentById = async (id, queries) => {    
    let res = {};
    await Comment.findByIdAndUpdate(id,queries, {new:true})
        .then(val => res = val)
        .catch(err => {})
    return res;
}

module.exports = {findCommentByID, deleteCommentByID, createComment, findComments, updateCommentById, deleteComments}