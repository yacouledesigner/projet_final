const mongoose = require('mongoose');
const {Schema} = mongoose;
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
    categotyId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
})

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;