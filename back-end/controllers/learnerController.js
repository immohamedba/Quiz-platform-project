const Learner = require('../models/LearnerModel');
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// Authentification 

// signup learner
const singupLearner = async (req, res) => {

    const { _id, firstName, lastName, password } = req.body;
    try {
        const learner = await Learner.signup(_id, firstName, lastName, password);
        // create a Taken
        const token = createToken(learner._id);

        res.status(200).json({ _id, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// login learner
const loginLearner = async (req, res) => {
    const {_id, password } = req.body;
    console.log( "in loginLearner ", _id, password )
    try {
        const learner = await Learner.login(_id, password);
        // create a Taken
        const token = createToken(learner._id);

        res.status(200).json({ _id, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}




// get all learners
const getLearners = async (req, res) => {
    // Learner.sign();

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
        { _id: id },
        { ...req.body }
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
    updateLearner,
    loginLearner,
    singupLearner
} 