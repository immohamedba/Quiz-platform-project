const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reqString = {
    type: String,
    required: true
};

const reqBoolean = {
    type: Boolean,
    required: true
};
const reqNumber = {
    type: Number,
    required: true
};

//----------------------------------
const ResultSchema = new schema({
    question: reqString,
    answers: [{
        answer: reqString,
        validity: reqBoolean,
        chosen: reqBoolean
    }],
    result: reqBoolean,
    justification: reqString
})
//--------------------------
const testTakenSchema = new schema({
    _id: {
        learnerEmail: reqString,
        testId: reqString,
        attemps: reqNumber
    },
    realizeAt: {
        type: Date,
        require: true
    },
    duration: reqNumber,
    results: [ResultSchema],
    score: reqNumber,
    session: {
        type: String
    },
    feedback: {
        type: String
    }
})
module.exports = mongoose.model('testTaken', testTakenSchema);