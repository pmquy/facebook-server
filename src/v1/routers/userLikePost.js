const express = require('express')
const router = express.Router()
const controller = require('../controllers/userLikePost')

router.get('/', controller.findUserLikePost);
router.post('/create', controller.addUserLikePost);
router.delete('/', controller.deleteUserLikePost);

module.exports = router
