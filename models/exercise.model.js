const mongoose = require('mongoose')

exerciseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
})

Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise