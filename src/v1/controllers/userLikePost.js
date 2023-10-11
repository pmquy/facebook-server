const db = require('../databases/userLikePost')

class Controller {
    addUserLikePost = async (req, res) => {
        const t = await db.addUserLikePost(req.body);
        res.send(t);
    }
    deleteUserLikePost = async (req, res) => {
        const t = await db.deleteUserLikePost(req.query);
        res.send(t)
    }
    findUserLikePost = async (req, res) => {        
        const t = await db.findUserLikePost(req.query);
        res.send(t);
    }
}

module.exports = new Controller();