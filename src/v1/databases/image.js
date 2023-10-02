const Image = require('../models/Image')

const createImage = async image => {
    let res = {}    
    await Image.create(image)        
        .then(val => res = val)
        .catch(err => {console.log(err)})
    return res  
}

const findImages = async (queries) => {
    let res = [];
    await Image.find(queries)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const findImageById = async id => {
    let res = {}
    await Image.findById(id)
        .then(val => res = val)
        .catch(err => {})
    return res;
}

const deleteImageById = async id => {
    let res = {};
    await Image.findByIdAndDelete(id)
        .then(val => res = val)
        .catch(err => {});
    return res;
}

const deleteImages = async queries => {
    let res = {};
    await Image.deleteMany(queries)
        .then(val => res = val)
        .catch(err => {});
    return res;
}

const updateImageById = async (id, queries) => {    
    let res = {};
    await Image.findByIdAndUpdate(id,queries, {new:true})
        .then(val => res = val)
        .catch(err => {})
    return res;
}

module.exports = {createImage, findImages, findImageById, deleteImageById, deleteImages, updateImageById}