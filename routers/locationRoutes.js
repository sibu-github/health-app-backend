const mongoose = require("mongoose");
const express = require("express");
const router = new express.Router();

const Location = require("../models/locationList");

router.post("/api/postlocation", async(req, res) => {
    try {
        const location = new Location(req.body);
        await location.save();
        res.send(location);
    } catch (err) {
        res.status(500).json({ message: "enter the proper details" });
    }
});

router.get("/api/getlocation/", async(req, res) => {
    try {
        const location = await Location.find({ active: true });
        res.send(location);
    } catch (err) {
        res.status(500).json({ message: "location is not found" });
    }
});

module.exports = router;