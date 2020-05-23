const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    longText: {
        type: String
    },
    shorText: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },

}, { timestamps: { createdOn: 'created_at', updatedOn: 'updated_at' } });
const question = mongoose.model('question', questionSchema);
module.exports = question;