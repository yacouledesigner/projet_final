const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

const userModel = mongoose.model('Utilisateurs', userSchema);
module.exports = userModel;