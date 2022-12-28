const factureModel = require('../models/facture');

const addfacture = async (req, res) => {
    const body = new factureModel(req.body)
    const data = await body.save()
    res.status(200).json(data)
}

const getAllfacture = async (req, res) => {
    const data = await factureModel.find()
    res.status(200).json(data)
}

const getOnefacture = async (req,res)=>{
    const data = await factureModel.findById({_id: req.params._id})
    res.status(200).json(data)
}

const deleteCategoty = async (req,res)=>{
    const data = await factureModel.findByIdAndDelete({_id: req.params._id})
    res.status(200).json(data)
}

const updatefacture = async (req, res)=>{

    const data = await factureModel.findOneAndUpdate({_id: req.params._id}, req.body);
    res.status(200).json(data)
}

module.exports = {addfacture, getAllfacture, getOnefacture, deleteCategoty, updatefacture}