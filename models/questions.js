const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    longText: {
        type: String,
        unique: true,
    },
    shortText: {
        type: String,
        unique: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: { createdOn: "created_at", updatedOn: "updated_at" } });

const question = mongoose.model("question", questionSchema);
module.exports = question;