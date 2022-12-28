const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const categoryModel = mongoose.model('Category', categorySchema);
module.exports = categoryModel;