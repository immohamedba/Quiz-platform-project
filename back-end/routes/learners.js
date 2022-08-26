const express = require('express');
const {
    createLearner,
    getLearners,
    getLearner,
    deleteLearner,
    updateLearner
}= require('../controllers/LearnerController');
const router = express.Router();

//Get all learner
router.get('/',getLearners )

//Get a single learner
router.get('/:id', getLearner)

//Post a new learner
router.post('/',createLearner);

//delete a learner
router.delete('/:id', deleteLearner)

// update a learner
router.patch('/:id',updateLearner)

module.exports = router;