const db = require('../databases/image')
const fs = require('fs')
const path = require('path')

class Controller {
    createImage = async (req, res) => {               
        const obj = {       
            ...req.body,     
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
        const image = await db.createImage(obj);
        fs.unlinkSync(path.join(__dirname + '/uploads/' + req.file.filename))
        res.send(image)
    }

    getImages = async (req, res) => {
        const comments = await db.findImages(req.query);
        res.send(comments)
    }

    getImageById = async (req, res) => {
        const image = await db.findImageById(req.params.id);
        res.send(image);
    }

    deleteImageById = async (req, res) => {
        const image = await db.deleteImageById(req.params.id);
        res.send(image);
    }

    deleteImages = async (req, res) => {
        const images = await db.deleteImages(req.query);
        res.send(images);
    }

    updateImageById = async (req, res) => {
        const queries = {   
            ...req.query,         
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }        
        const image = await db.updateImageById(req.params.id, queries);
        fs.unlinkSync(path.join(__dirname + '/uploads/' + req.file.filename))
        res.send(image);
    }
}

module.exports = new Controller();