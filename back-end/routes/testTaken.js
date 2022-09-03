const express = require('express');
const {
    getTestTakens,
    getTestTaken,
    createTestTaken,
    deleteTestTaken
} = require('../controllers/testTakenController')
const requireAutth = require('../middleware/requireAuth')
const router = express.Router();

// authantication required
router.use(requireAutth)

//Get all testTaken
router.get('/', getTestTakens)

//Get a single testTaken
router.get('/testTaken', getTestTaken)

//Post a new testTaken
router.post('/', createTestTaken);

//delete a test
router.delete('/testTaken', deleteTestTaken)

module.exports = router;