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
router.get('/testTaken', getTestTaken)

//Post a new testTaken
router.post('/', createTestTaken);

//delete a test
router.delete('/testTaken', deleteTestTaken)

module.exports = router;