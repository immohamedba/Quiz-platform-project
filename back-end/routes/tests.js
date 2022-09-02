const express = require('express');
const {
    createTest,
    getTests,
    getTest,
    deleteTest,
    updateTest
} = require('../controllers/testController')

const requireAutth = require('../middleware/requireAuth')

const router = express.Router();

//require auth for all testes 
router.use(requireAutth)
//Get all test
router.get('/', getTests)

//Get a single test
router.get('/:id', getTest)

//Post a new test
router.post('/', createTest);

//delete a test
router.delete('/:id', deleteTest)

// update a test
router.patch('/:id', updateTest)

module.exports = router;