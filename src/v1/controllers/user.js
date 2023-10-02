const db = require('../databases/user')
class Controller {
    getUsers = async (req, res) => {
        const users = await db.findUsers(req.query);
        res.send(users)
    }

    getUserByID = async (req, res) => {
       const user = await db.findUserByID(req.params.id);    
       res.send(user)
    }

    deleteUserByID = async (req, res) => {
        const user = await db.deleteUserByID(req.params.id)
        res.send(user)
    }
    
    updateUserByID = async (req, res) => {
        const user = await db.updateUserById(req.params.id, req.body);
        res.send(user)
    }

    createUser = async (req, res) => {                
        const user = await db.createUser(req.body)
        res.send(user)
    }

    deleteUsers = async (req, res) => {
        const user = await db.deleteUsers(req.query)
        res.send(user)
    }

    updateUsers = async (req, res) => {
        const users = await db.updateUsers(req.body);
        res.send(users)
    }
}

module.exports = new Controller();