const mongoose = require("mongoose");
const validator = require("validator");

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
    },
}, { timestamps: { createdOn: "created_at", updatedOn: "updated_at" } });
//env.config();
const userinfo = mongoose.model("userinfo", userinfoScema);
module.exports = userinfo;