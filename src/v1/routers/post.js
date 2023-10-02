const express = require('express')
const router = express.Router()
const controller = require('../controllers/post')

router.post('/create', controller.createPost)
router.get('/:id', controller.getPostByID)
router.patch('/:id', controller.updatePostByID)
router.delete('/:id', controller.deletePostByID)
router.get('/', controller.getPosts)
router.delete('/', controller.deletePosts)
router.patch('/', controller.updatePosts)

module.exports = router