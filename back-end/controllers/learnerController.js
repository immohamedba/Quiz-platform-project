const Learner = require('../models/LearnerModel');

// get all learners
const getLearners = async (req, res) => {
    const learner = await Learner.find({}).sort({ createdAt: -1 })
    res.status(200).json(learner);
}
// get single learner 
const getLearner = async (req, res) => {
    const { id } = req.params;
    const learner = await Learner.findById(id)

    if (!learner) {
        return res.status(404).json({ error: 'No such learner' })
    }
    res.status(200).json(learner)
}

// create a new Learner
const createLearner = async (req, res) => {
    const { _id, firstName, lastName, password } = req.body;
    try {
        const learner = await Learner.create({ _id, firstName, lastName, password })
        res.status(200).json(learner)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// delete learner
const deleteLearner = async (req, res) => {
    const { id } = req.params;
    const learner = await Learner.findByIdAndDelete({ _id: id });
    if (!learner) {
        return res.status(404).json({ error: 'No such learner' })
    }
    res.status(200).json(learner);
}

const updateLearner = async (req, res) => {
    const { id } = req.params;
    const learner = await Learner.findByIdAndUpdate(
        {_id: id },
        {...req.body }
    )
    if (!learner) {
        return res.status(404).json({ error: 'No such learner' })
    }
    res.status(200).json(learner)
}

module.exports = {
    getLearners,
    createLearner,
    getLearner,
    deleteLearner,
    updateLearner
}