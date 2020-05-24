const mongoose = require('mongoose');
const validator = require('validator');
const logSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    }
}, { timestamps: { createdOn: 'created_at' } });

const apilog = mongoose.model('apilog', logSchema);
module.exports = apilog;