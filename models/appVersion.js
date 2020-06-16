const mongoose = require("mongoose");

const versionSchema = new mongoose.Schema({
    version: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    appType: {
        type: String,
        enum: ['android', 'ios']
    },
    url: {
        type: String
    }
})

const versionModel = mongoose.model("appVersion", versionSchema);
module.exports = versionModel;