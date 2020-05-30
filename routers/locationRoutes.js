const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

const Location = require("../models/locationList");

router.post("/api/postlocation/", async(req, res) => {
    try {
        const location = new Location(req.body);
        await location.save();
        res.send(location);
    } catch (err) {
        res.send(err);
    }
});

router.get("/api/getlocation/", async(req, res) => {
    try {
        const location = await Location.find({ active: true }, { locationName: 1 });
        res.send(location);
    } catch (err) {
        res.status(404).send(err);
    }
});

module.exports = router;