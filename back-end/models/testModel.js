const mongoose = require('mongoose');
const schema = mongoose.Schema;
const testSchema = new schema({
    _id: {
        type: String,
        default: () => nanoid(),
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    nbQuestion: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        required: false
    },
    disponibility: {
        type: Boolean,
        required: true
    },

    subdomain: [{
        type: String,
        required: true
    }],
    access: {
        type: String,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model('test', testSchema);