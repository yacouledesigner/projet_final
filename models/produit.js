const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantite: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },

})

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;