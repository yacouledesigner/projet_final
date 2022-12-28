const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    quantite: {
        type: Number,
        required: true
    },
})

const commandeModel = mongoose.model('Commande', commandeSchema);
module.exports = commandeModel;