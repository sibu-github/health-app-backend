const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error('email is invalid');
            }
        }
    }
}, { timestamps: { createdOn: 'created_at' } });