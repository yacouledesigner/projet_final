const express = require('express');
const router = express.Router()

const categoryController = require('../controllers/categorie')

router.post('/', categoryController.addcategory)
router.get('/',categoryController.getAllCategory)
router.get('/:_id', categoryController.getOneCategory)
router.delete('/:_id', categoryController.getOneCategory)
router.put('/:_id', categoryController.getOneCategory)

module.exports = router //exporter router