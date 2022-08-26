const mongoose = require('mongoose');
const schema = mongoose.Schema;
const trainerSchema = new schema({
    _id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
}, { timestamps: true })
module.exports = mongoose.model('trainer', trainerSchema);