const express = require('express');
const router = express.Router()

const usersController = require('../controllers/utlisateur')

router.post('/', usersController.addUsers)
router.get('/',usersController.getAllUsers)
router.get('/:_id', usersController.getOneUsers)
router.delete('/:_id', usersController.getOneUsers)
router.put('/:_id', usersController.getOneUsers)

module.exports = router //exporter router