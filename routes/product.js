const express = require('express');
const router = express.Router()

const productController = require('../controllers/produit')

router.post('/', productController.addProduct)
router.get('/',productController.getAllProduct)
router.get('/:_id', productController.getOneProduct)
router.delete('/:_id', productController.getOneProduct)
router.put('/:_id', productController.getOneProduct)

module.exports = router //exporter router