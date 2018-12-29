const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: String,
    nickName: String,
    avatarUrl: String,
    artCreateTime: {
        type: Date,
        default: Date.now()
    }
})

module.exports = artSchema;