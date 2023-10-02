const post = require('./post')
const message = require('./message')
const image = require('./image')
const User = require('../models/User')

const findUserByID = async id => {
    let res = {};
    await User.findById(id)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const deleteUserByID = async id => {    
    let res = {};
    await User.findByIdAndDelete(id)
        .then(val => {res = val; return val})
        .then((val) => image.deleteImageById(val.avt))
        .then(() => post.deletePosts({userId : id}))        
        .then(() => message.deleteMessages({userId : id}))
        .catch(err => {});
    return res;
}

const createUser = async(user) => {    
    let res = {};
    await User.findOne({username : user.username})
        .then(val => {
            if(!val) {
                return User.create({likedPosts : [], createAt : Date.now(), ...user})
                    .then(val => res = val)
            };})
        .catch(err => {})
    return res;
}

const findUsers = async (queries) => {
    let res = [];
    await User.find(queries)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const updateUserById = async (id, queries) => {    
    let res = {};
    await User.findByIdAndUpdate(id,queries, {new:true})
        .then(val => res = val)
        .catch(err => {});
    return res;
}

const deleteUsers = async (queries) => {
    let res = {};
    const users = await findUsers(queries)
    for(const user of users) {
        await deleteUserByID(user._id);
    }
    return res;
}

const updateUsers = async (queries) => {
    let res = {};
    await User.updateMany(queries)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

module.exports = {findUserByID, deleteUserByID, createUser, findUsers, updateUsers, updateUserById, deleteUsers}