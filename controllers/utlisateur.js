const usersModel = require('../models/utilisateurs');

const addUsers = async (req, res) => {
    const body = new usersModel(req.body)
    const data = await body.save()
    res.status(200).json(data)
}

const getAllUsers = async (req, res) => {
    const data = await usersModel.find()
    res.status(200).json(data)
}

const getOneUsers = async (req,res)=>{
    const data = await usersModel.findById({_id: req.params._id})
    res.status(200).json(data)
}

const deleteUsers = async (req,res)=>{
    const data = await usersModel.findByIdAndDelete({_id: req.params._id})
    res.status(200).json(data)
}

const updateUsers = async (req, res)=>{

    const data = await usersModel.findOneAndUpdate({_id: req.params._id}, req.body);
    res.status(200).json(data)
}

module.exports = {addUsers, getAllUsers, getOneUsers, deleteUsers, updateUsers}