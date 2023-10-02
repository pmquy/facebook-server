const express = require('express')
const router = express.Router()
const controller = require('../controllers/comment')

router.post('/create', controller.createComment)
router.get('/:id', controller.getCommentByID)
router.patch('/:id', controller.updateCommentByID)
router.delete('/:id', controller.deleteCommentByID)
router.get('/', controller.getComments)
router.delete('/', controller.deleteComments)

module.exports = router