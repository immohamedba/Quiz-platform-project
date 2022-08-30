const express = require('express');
const {
    createLearner,
    getLearners,
    getLearner,
    deleteLearner,
    updateLearner,
    loginLearner,
    singupLearner
} = require('../controllers/LearnerController');
const router = express.Router();

//Get all learner
router.get('/', getLearners)

//Get a single learner
router.get('/:id', getLearner)

//Post a new learner
router.post('/', createLearner);

//delete a learner
router.delete('/:id', deleteLearner)

// update a learner
router.patch('/:id', updateLearner)

// Authentification and registration
router.post('/login', loginLearner);
router.post('/signup', singupLearner);

module.exports = router;