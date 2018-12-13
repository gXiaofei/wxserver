const mongoose = require('mongoose');
const artSchema = require('../schema/artSchema');

const artModel = mongoose.model('Art', artSchema);

module.exports = artModel;