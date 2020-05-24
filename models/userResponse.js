const mongoose = require('mongoose');
const express = require('express');
const validator = require('validator');
const router = express.Router();
mongoose.connect("mongodb+srv://tars1729:tars1729@mycluster-eljsg.azure.mongodb.net/healthapp?retryWrites=true&w=majority", { useNewUrlParser: true });
const responseSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['employee', 'vendor', 'customer', 'visitor']
    },
    locationId: {
        type: String
    },
    locationName: {
        type: String
    },
    locationType: {
        type: String
    },
    country: {
        type: String
    },
    region: {
        type: String
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email is invalid');
            }
        }
    },
    phone: {
        type: String,
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    company: {
        type: String
    },
    ingredionContact: {
        type: String
    },
    response: [{
        questionId: { type: String },
        shortText: { type: String },
        answer: { type: Boolean },
        addlInfo: { type: String }
    }],
    certifyInfoName: {
        type: String
    },
    certifyInfoChecked: {
        type: Boolean
    }


}, { timestamps: { createdOn: 'createdOn' } });
const userResponse = mongoose.model('userResponse', responseSchema);
module.exports = userResponse;