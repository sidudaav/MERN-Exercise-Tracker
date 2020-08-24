const mongoose = require('mongoose')

userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
}, {
    timestamps: true,
})

User = mongoose.model('User', userSchema)

module.exports = User