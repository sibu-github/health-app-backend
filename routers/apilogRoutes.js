const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

const apilog = require("../models/apilog");

router.post("/api/apilog", async(req, res) => {
    try {
        const log = new apilog(req.body);
        await log.save();
        res.send(log);
    } catch (err) {
        res.send(err);
    }
});

router.get("/api/apiloginfo", async(req, res) => {
    try {
        const loginfo = await apilog.find();
        res.send(loginfo);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;