const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const hradmin = require("../models/HRadmin");

/*API for checking the access of the admin*/
router.get("/api/admin", async(req, res) => {
    let Email = req.query.email;
    if (Email && Email.length > 0) {
        try {
            const Admin = await hradmin.findOne({ email: Email, isActive: true }, { isActive: 1 });
            if (Admin && Admin.isActive === true) {
                res.status(200).json({ Authorized: "true" });
            } else {
                res.status(200).json({ Authorized: "false" });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(500).json({ message: "enter valid email from parameters" });
    }
});

module.exports = router;