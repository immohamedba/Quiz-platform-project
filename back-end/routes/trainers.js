const express = require('express');
const {
    createTrainer,
    getTrainers,
    getTrainer,
    deleteTrainer,
    updateTrainer
}= require('../controllers/trainerController')
const router = express.Router();

//Get all Trainer
router.get('/', getTrainers)

//Get a single Trainer
router.get('/:id', getTrainer)

//Post a new Trainer
router.post('/',createTrainer);

//delete a Trainer
router.delete('/:id', deleteTrainer)

// update a Trainer
router.patch('/:id',updateTrainer)

module.exports = router;