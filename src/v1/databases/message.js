const Message = require('../models/message')

const findMessageByID = async id => {
    let res = {};
    await Message.findById(id)
        .then(val => {if(val) res = val})
        .catch(err => {})
    return res;
}

const deleteMessageByID = async id => {
    let res = {};
    await Message.findByIdAndDelete(id)
        .then(val => {if(val) res = val;})
        .catch(err => {})
    return res;
}

const createMessage = async(message) => {
    let res = {}    
    await Message.create({createAt : Date.now(),...message})
        .then(val => res = val)        
        .catch(err => {})
    return res
}

const findMessages = async (queries) => {
    let res = [];
    await Message.find(queries)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const deleteMessages = async (queries) => {
    let res = {};
    await Message.deleteMany(queries)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const updateMessageById = async (id, queries) => {    
    let res = {};
    await Message.findByIdAndUpdate(id,queries, {new:true})
        .then(val => res = val)
        .catch(err => {})
    return res;
}

module.exports = {findMessageByID, deleteMessageByID, createMessage, findMessages, updateMessageById, deleteMessages}