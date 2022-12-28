const express = require('express');
const router = express.Router()

const commandeController = require('../controllers/commande')

router.post('/', commandeController.addCommande)
router.get('/',commandeController.getAllCommande)
router.get('/:_id', commandeController.getOneCommande)
router.delete('/:_id', commandeController.getOneCommande)
router.put('/:_id', commandeController.getOneCommande)

module.exports = router //exporter router