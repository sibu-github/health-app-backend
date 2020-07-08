const express = require("express");
const router = new express.Router();
const redeemCodeModel = require("../models/redeemCodes");

router.get("/api/getRedeemCode", async (req, res) => {
  try {
    const result = await redeemCodeModel.findOneAndUpdate(
      { active: true },
      { $set: { active: false, updatedAt: new Date() } },
      { new: true }
    );
    res.json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.toString() });
  }
});

module.exports = router;
