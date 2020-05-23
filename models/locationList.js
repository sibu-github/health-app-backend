const mongoose = require('mongoose');
const validator = require('validator');

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/healthapp', { useNewUrlParser: true, useUnifiedTopology: true });

const locationSchema = new mongoose.Schema({

    locationName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        uppercase: true
    },

    locationType: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },

    country: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },

    region: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    active: {
        type: Boolean,
        default: true
    }




})

const location = mongoose.model('location', locationSchema);
module.exports = location;