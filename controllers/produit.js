const productModel = require('../models/produit');

const addProduct = async (req, res) => {
    const body = new productModel(req.body)
    const data = await body.save()
    res.status(200).json(data)
}

const getAllProduct = async (req, res) => {
    const data = await productModel.find()
    res.status(200).json(data)
}

const getOneProduct = async (req,res)=>{
    const data = await productModel.findById({_id: req.params._id})
    res.status(200).json(data)
}

const deleteProduct = async (req,res)=>{
    const data = await productModel.findByIdAndDelete({_id: req.params._id})
    res.status(200).json(data)
}

const updateProduct = async (req, res)=>{

    const data = await productModel.findOneAndUpdate({_id: req.params._id}, req.body);
    res.status(200).json(data)
}

module.exports = {addProduct, getAllProduct, getOneProduct, deleteProduct, updateProduct}