const express = require('express')
const router = express.Router();

router.use('/users', require('./user'))
router.use('/comments', require('./comment'))
router.use('/posts', require('./post'))
router.use('/messages', require('./message'))
router.use('/images', require('./image'))
router.use('/userlikepost', require('./userLikePost'))

module.exports = router