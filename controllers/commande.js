const commandeModel = require('../models/commande');

const addCommande = async (req, res) => {
    const body = new commandeModel(req.body)
    const data = await body.save()
    res.status(200).json(data)
}

const getAllCommande = async (req, res) => {
    const data = await commandeModel.find()
    res.status(200).json(data)
}

const getOneCommande = async (req,res)=>{
    const data = await commandeModel.findById({_id: req.params._id})
    res.status(200).json(data)
}

const deleteCommande = async (req,res)=>{
    const data = await commandeModel.findByIdAndDelete({_id: req.params._id})
    res.status(200).json(data)
}

const updateCommande = async (req, res)=>{

    const data = await commandeModel.findOneAndUpdate({_id: req.params._id}, req.body);
    res.status(200).json(data)
}

module.exports = {addCommande, getAllCommande, getOneCommande, deleteCommande, updateCommande}