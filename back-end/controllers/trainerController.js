const Trainer = require('../models/TrainerModel');

// get all trainers
const getTrainers = async (req, res) => {
    const trainer = await Trainer.find({}).sort({ createdAt: -1 })
    res.status(200).json(trainer);
}

// get single trainers 
const getTrainer = async (req, res) => {
    const { id } = req.params;
    const trainer = await Trainer.findById(id)
    if (!trainer) {
        return res.status(404).json({ error: 'No such trainer' })
    }
    res.status(200).json(trainer)
}

// create a new trainer
const createTrainer = async (req, res) => {
    const { _id, firstName, lastName, password, description, phone } = req.body;
    try {
        const trainer = await Trainer.create({ _id, firstName, lastName, password, description, phone })
        res.status(200).json(trainer)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteTrainer = async (req, res) => {
    const { id } = req.params;
    const trainer = await Trainer.findByIdAndDelete({ _id: id });
    if (!trainer) {
        return res.status(404).json({ error: 'No such trainer' })
    }
    res.status(200).json(trainer);
}

const updateTrainer = async (req, res) => {
    const { id } = req.params;
    const trainer = await Trainer.findByIdAndUpdate(
        { _id: id },
        { ...req.body }
    )
    if (!trainer) {
        return res.status(404).json({ error: 'No such trainer' })
    }
    res.status(200).json(trainer)
}

module.exports = {
    getTrainers,
    getTrainer,
    createTrainer,
    deleteTrainer,
    updateTrainer
}