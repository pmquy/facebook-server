const express = require('express')
const router = express.Router()
const controller = require('../controllers/message')

router.post('/create', controller.createMessage)
router.get('/:id', controller.getMessageByID)
router.patch('/:id', controller.updateMessageByID)
router.delete('/:id', controller.deleteMessageByID)
router.get('/', controller.getMessages)
router.delete('/', controller.deleteMessages)

module.exports = router