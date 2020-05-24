const mongoose = require("mongoose");
const validator = require('validator');
mongoose.connect("mongodb+srv://tars1729:tars1729@mycluster-eljsg.azure.mongodb.net/healthapp?retryWrites=true&w=majority", { useNewUrlParser: true });
const userinfoScema = new mongoose.Schema({
    email: {
        type: String,

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