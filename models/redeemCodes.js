const mongoose = require("mongoose");

const redeemCodeSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  updatedAt: {
    type: Date,
  },
});

const redeemcode = mongoose.model("redeemcode", redeemCodeSchema);
module.exports = redeemcode;
