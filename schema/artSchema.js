const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    artTitle: String,
    artContent: String,
    userId: String,
    artCreateTime: {
        type: Date,
        default: Date.now()
    }
})

module.exports = artSchema;