const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

const userResponse = require("../models/userResponse");
const Location = require("../models/locationList");


router.post("/api/userResponse", async(req, res) => {
    try {
        location = await Location.find({ locationName: req.body.locationName });
        if (location && location.length > 0) {
            const Response = new userResponse({
                type: req.body.type,
                locationId: location[0]._id,
                locationName: location[0].locationName,
                locationType: location[0].locationType,
                country: location[0].country,
                region: location[0].region,
                email: req.body.email,
                phone: req.body.phone,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                company: req.body.company,
                ingredionContact: req.body.ingredionContact,
                response: req.body.response,
                certifyInfoName: req.body.certifyInfoName,
                certifyInfoCheck: req.body.certifyInfoCheck,
            });

            await Response.save();

            res.status(200).send(Response);
        } else {
            res.status(500).json({ message: "Location not found" });
        }
    } catch (err) {
        res.send(err);
    }
});

router.get("/api/userflag", async(req, res) => {
    const Email = req.query.email;
    var dateObj = new Date();
    today = dateObj.toDateString();
    try {
        const URes = await userResponse
            .find({ email: Email })
            .limit(1)
            .sort({ $natural: -1 });
        udate = URes[0].updatedAt.toDateString();

        if (udate == today) {
            res.status(302).json({ updated: "yes" });
        } else {
            res.status(404).json({ updated: "No" });
        }
    } catch (err) {
        res.status(404).send(err);
    }
});

router.get("/api/dashboard/", async(req, res) => {
    try {
        q1_counting_positive = await userResponse.aggregate([{
                $match: req.body,
            },
            {
                $match: { "response.0.answer": false },
            },
            {
                $count: "postive",
            },
        ]);

        q2_counting_positive = await userResponse.aggregate([{
                $match: req.body,
            },
            {
                $match: { "response.1.answer": true },
            },
            {
                $count: "postive",
            },
        ]);

        q3_counting_positive = await userResponse.aggregate([{
                $match: req.body,
            },
            {
                $match: { "response.2.answer": true },
            },
            {
                $count: "postive",
            },
        ]);

        q1_counting_negative = await userResponse.aggregate([{
                $match: req.body,
            },
            {
                $match: { "response.0.answer": false },
            },
            {
                $count: "negative",
            },
        ]);

        q2_counting_negative = await userResponse.aggregate([{
                $match: req.body,
            },
            {
                $match: { "response.1.answer": false },
            },
            {
                $count: "negative",
            },
        ]);

        q3_counting_negative = await userResponse.aggregate([{
                $match: req.body,
            },
            {
                $match: { "response.2.answer": false },
            },
            {
                $count: "negative",
            },
        ]);

        res.send({
            q1_count: {
                "postive": q1_counting_positive,
                "negative": q1_counting_negative,
            },
            q2_count: {
                "positive": q2_counting_positive,
                "negative": q2_counting_negative,
            },
            q3_count: {
                "positive": q3_counting_positive,
                "negative": q3_counting_negative,
            },
        });
    } catch (err) {
        res.status(404).send(err);
    }
});

module.exports = router;