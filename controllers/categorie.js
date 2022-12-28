const categoryModel = require('../models/categorie');

const addcategory = async (req, res) => {
    const body = new categoryModel(req.body)
    const data = await body.save()
    res.status(200).json(data)
}

const getAllCategory = async (req, res) => {
    const data = await categoryModel.find()
    res.status(200).json(data)
}

const getOneCategory = async (req,res)=>{
    const data = await categoryModel.findById({_id: req.params._id})
    res.status(200).json(data)
}

const deleteCategoty = async (req,res)=>{
    const data = await categoryModel.findByIdAndDelete({_id: req.params._id})
    res.status(200).json(data)
}

const updateCategory = async (req, res)=>{

    const data = await categoryModel.findOneAndUpdate({_id: req.params._id}, req.body);
    res.status(200).json(data)
}

module.exports = {addcategory, getAllCategory, getOneCategory, deleteCategoty, updateCategory}