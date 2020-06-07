const mongoose = require("mongoose");
const validator = require('validator');

const locationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true,
        trim: true,
    },

    locationType: {
        type: String,
        required: true,
        trim: true,
    },

    country: {
        type: String,
        required: true,
        trim: true,
    },

    region: {
        type: String,
        required: true,
        trim: true,
    },
    languageCode: {
        type: String
    },
});

const location = mongoose.model("location", locationSchema);
module.exports = location;