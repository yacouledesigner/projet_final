const express = require('express');
const router = express.Router()

const factureController = require('../controllers/facture')

router.post('/', factureController.addfacture)
router.get('/',factureController.getAllfacture)
router.get('/:_id', factureController.getOnefacture)
router.delete('/:_id', factureController.getOnefacture)
router.put('/:_id', factureController.getOnefacture)

module.exports = router //exporter router