const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.post('/create', controller.createUser)
router.get('/:id', controller.getUserByID)
router.delete('/:id', controller.deleteUserByID)
router.patch('/:id', controller.updateUserByID)
router.get('/',  controller.getUsers)
router.delete('/', controller.deleteUsers)
router.patch('/', controller.updateUsers)

module.exports = router
