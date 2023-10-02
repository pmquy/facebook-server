const db = require('../databases/message')
class Controller {
    getMessages = async (req, res) => {
        const messages = await db.findMessages(req.query);
        res.send(messages)
    }

    getMessageByID = async (req, res) => {
       const message = await db.findMessageByID(req.params.id);
       res.send(message)
    }

    deleteMessageByID = async (req, res) => {
        const message = await db.deleteMessageByID(req.params.id)
        res.send(message)
    }
    
    updateMessageByID = async (req, res) => {
        const message = await db.updateMessageById(req.params.id, req.query);
        res.send(message)
    }

    createMessage = async (req, res) => {                
        const message = await db.createMessage(req.body)
        res.send(message)
    }

    deleteMessages = async (req, res) => {
        const messages = await db.deleteMessages(req.query);
        res.send(messages);
    }
}

module.exports = new Controller();