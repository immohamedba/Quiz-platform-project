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
const SessionSchema = new schema({
    _id: reqString,
    code: reqString,
    startAt: Date,
    endtAt: Date,
    learners :[{
        email : reqString
    }]
})

const QuestionSchema = new schema({
    question: reqString,
    answers: [{
        answer: reqString,
        validity: reqBoolean
    }],
    justification: reqString
}, { timestamps: true })

const testSchema = new schema({
    _id: reqString,
    name: reqString,
    category: reqString,
    duration: reqNumber,
    nbQuestion: reqNumber,

    rating: reqNumber,
    disponibility: reqBoolean,

    subdomain: [reqString],
    access: reqString,
    questions: [QuestionSchema],
    sessions :[SessionSchema]
}, { timestamps: true })

module.exports = mongoose.model('test', testSchema);