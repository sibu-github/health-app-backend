const mongoose = require("mongoose");
const validator = require('validator');
const userinfoScema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error('email is invalid');
            }
        }
    },

    phone: {
        type: String,
    },

    locationId: {
        type: String,
    },

    locationName: {
        type: String,
    }


}, { timestamps: { createdOn: 'created_at', updatedOn: 'updated_at' } });

const userinfo = mongoose.model('userinfo', userinfoScema);
module.exports = userinfo;