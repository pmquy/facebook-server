const db = require('../databases/comment')
class Controller {
    getComments = async (req, res) => {
        const comments = await db.findComments(req.query);
        res.send(comments)
    }

    getCommentByID = async (req, res) => {
       const comment = await db.findCommentByID(req.params.id);
       res.send(comment)
    }

    deleteCommentByID = async (req, res) => {
        const comment = await db.deleteCommentByID(req.params.id)
        res.send(comment)
    }
    
    updateCommentByID = async (req, res) => {
        const comment = await db.updateCommentById(req.params.id, req.query);
        res.send(comment)
    }

    createComment = async (req, res) => {                
        const comment = await db.createComment(req.body)
        res.send(comment)
    }

    deleteComments = async (req, res) => {
        const comments = await db.deleteComments(req.query);
        res.send(comments);
    }
}

module.exports = new Controller();