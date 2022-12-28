const mongoose = require('mongoose');

const factureSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    montant: {
        type: Number,
        required: true
    },
    quantite: {
        type: Number,
        required: true
    },
})

const factureModel = mongoose.model('Facture', factureSchema);
module.exports = factureModel;