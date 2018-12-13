const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    avatarUrl: String,
    city: String,
    country: String,
    gender: String,
    language: String,
    nickName: String,
    province: String,
})

module.exports = userSchema;