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
    //below fileds are updated on 29-may-2020 
    buildingNo: { //buildingNo is added 
        type: String
    },
    floorNo: { //floorNo is added      
        type: String
    },
    sectionNo: { // sectionNo is added 
        type: String
    },
    cubeNo: { //sectionNo is added     
        type: String
    }
}, { timestamps: { createdOn: "created_at", updatedOn: "updated_at" } });

const userinfo = mongoose.model("userinfo", userinfoScema);
module.exports = userinfo;