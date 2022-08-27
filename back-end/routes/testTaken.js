const express = require('express');
const {
    getTestTakens,
    getTestTaken,
    createTestTaken,
    deleteTestTaken
} = require('../controllers/testTakenController')
const router = express.Router();


//Get all testTaken
router.get('/', getTestTakens)

//Get a single testTaken
router.get('/:id', getTestTaken)

//Post a new testTaken
router.post('/', createTestTaken);

//delete a test
router.delete('/:id', deleteTestTaken)

module.exports = router;