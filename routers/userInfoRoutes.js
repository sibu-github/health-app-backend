const mongoose = require("mongoose");
const express = require("express");
const router = new express.Router();
const userinfo = require("../models/userInfo");
const location = require("../models/locationList");
const auth = require('../middleware/auth');
const url = require("url");

router.post("/api/userinfo", auth, async(req, res) => {
    try {
        const Location = await location.find({
            locationName: req.body.locationName
        });
        //addded the if (Location  && locationName.length>0)  
        if (Location && Location.length > 0) {
            const userInfo = new userinfo({
                email: req.body.email,
                phone: req.body.phone,
                locationId: Location[0]._id,
                locationName: Location[0].locationName,
                //added the buildingNO ,floorNo,sectionNo, cubeNO
                buildingNo: req.body.buildingNo, //updatedon:29-may-2020
                floorNo: req.body.floorNo, //updatedon:29-may-2020
                sectionNo: req.body.sectionNo, //updatedon:29-may-2020
                cubeNo: req.body.cubeNo //updatedon:29-may-2020


            });
            await userInfo.save();
            res.status(200).json({ userInfo });
        } else {
            res.status(200).json({ message: "invalid locationName" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/api/userdetails", auth, async(req, res) => {
    const email = req.query.email;
    if (email && email.length > 0) {
        try {
            const userdetails = await userinfo.find({ email: email });
            res.json({ userdetails });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(500).json({ message: "enter proper email" });
    }
});



module.exports = router;
