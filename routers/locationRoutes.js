const mongoose = require("mongoose");
const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");

const Location = require("../models/locationList");

router.post("/api/postlocation", auth, async(req, res) => {
    try {
        const location = new Location(req.body);
        await location.save();
        //added the json and status
        res.status(200).json(location);
    } catch (err) {
        //added status 500 and message in json
        res.status(500).json({ message: "enter the proper details" });
    }
});

router.get("/api/getlocation/", auth, async(req, res) => {
    let langCode = req.query.languageKey;
    if (langCode) {
        try {
            const prioritylocation = await Location.find({ languageCode: langCode, priorityNumber: { $lt: 8 } }).sort('priorityNumber');
            const nonPrioritylocation = await Location.find({ languageCode: langCode, priorityNumber: { $gte: 8 } }).sort('locationName');
            const location = prioritylocation.concat(nonPrioritylocation);
            // console.log(location);
            res.status(200).json(location);
        } catch (err) {
            //added status 
            res.status(500).json({ message: "location is not found" });
        }
    } else {
        res.status(500).json({ message: "enterlanguagecode in params" });
    }
});

module.exports = router;