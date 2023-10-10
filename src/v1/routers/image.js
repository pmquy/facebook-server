const express = require('express')
const router = express.Router()
const controller = require('../controllers/image')
const upload =  require('../config/multer');

router.post('/create', upload.single('image'),controller.createImage);
router.get('/:id',controller.getImageById);
router.delete('/:id', controller.deleteImageById);
router.patch('/:id',upload.single('image'), controller.updateImageById)
router.get('/',controller.getImages);
router.delete('/', controller.deleteImages);
module.exports = router;