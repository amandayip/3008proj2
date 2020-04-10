const mongoose = require('mongoose');

ColorSchema = mongoose.Schema({
    color:{
        type: String, 
        required:"{PATH} is required"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, { collection : 'color' })

module.exports = mongoose.model('Color', ColorSchema);