const mongoose = require('mongoose');
const RoleSchema = new mongoose.Schema({
    role: {
        type: String
    },
    languageKey: {
        type: String
    }

});


const role = mongoose.model('role', RoleSchema);
module.exports = role;