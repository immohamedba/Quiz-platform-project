const TestTaken = require('../models/testTakenModels');

//Get all testTaken
const getTestTakens = async (req, res) => {
    console.log("getTestTakens");
    const testTaken = await TestTaken.find({}).sort({ createdAt: -1 })
    res.status(200).json(testTaken);
}

// get single testTaken
const getTestTaken = async (req, res) => {
    console.log("getTestTaken");
    const { learnerEmail, testId, attemps } = req.query;
    id = {
        learnerEmail: learnerEmail,
        testId: testId,
        attemps: parseInt(attemps)
    }
    const testTaken = await TestTaken.findById(id)
    if (!testTaken) {
        return res.status(404).json({ error: 'No such taken test' })
    }
    res.status(200).json(testTaken)
}
const createTestTaken = async (req, res) => {
    const { _id, realizeAt, duration, results, score, session, feedback } = req.body;
    // console.log(realizeAt);
    // console.log(req.body);
    var rDate = new Date(realizeAt);
    console.log(realizeAt);
    console.log(rDate);
    try {
        const testTaken = await TestTaken.create({
            _id, realizeAt: rDate, duration, results, score, session, feedback
        })
        res.status(200).json(testTaken)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const deleteTestTaken = async (req, res) => {

    const { learnerEmail, testId, attemps } = req.query;
    id = {
        learnerEmail: learnerEmail,
        testId: testId,
        attemps: parseInt(attemps)
    }
    const testTaken = await TestTaken.findByIdAndDelete({ _id: id });
    if (!testTaken) {
        return res.status(404).json({ error: 'No such taken test' })
    }
    res.status(200).json(testTaken)
}

module.exports = {
    getTestTakens,
    getTestTaken,
    createTestTaken,
    deleteTestTaken
}