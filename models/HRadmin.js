const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const hradmin = mongoose.model('hradmin', adminSchema);
module.exports = hradmin;