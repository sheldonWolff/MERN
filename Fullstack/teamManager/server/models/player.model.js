const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, 'Name must be at least 2 characters!'],
        required: [
            true,
            "Name is required"
        ]
    },
    preferredPosition: {
        type: String,
        required: [
            true,
            "Position is required"
        ]
    }
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);