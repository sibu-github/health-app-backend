const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const hradmin = require("../models/HRadmin");

router.get("/api/admin", async(req, res) => {
    const Email = req.query.email;
    try {
        const Admin = await hradmin.findOne({ email: Email, isActive: true }, { isActive: 1 });
        if (Admin && Admin.isActive == true) {
            res.status(302).json({ Authorized: "true" });
        } else {
            res.status(401).json({ Authorized: "false" });
        }
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;