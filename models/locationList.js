const mongoose = require('mongoose');
const validator = require('validator');
mongoose.set('useCreateIndex', true);
// mongoose.connect('mongodb://localhost:27017/healthapp', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://tars1729:tars1729@mycluster-eljsg.azure.mongodb.net/healthapp?retryWrites=true&w=majority", { useNewUrlParser: true });
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
    active: {
        type: Boolean,
        default: true
    }
});

const location = mongoose.model('location', locationSchema);
module.exports = location;