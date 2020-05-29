const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

const userResponse = require("../models/userResponse");
const Location = require("../models/locationList");



router.post("/api/userResponse", async(req, res) => {
    try {
        let location = await Location.find({ locationName: req.body.locationName });
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
                //updated buildingNo floorNo sectionNo cubeNo
                buildingNo: req.body.buildingNo, //buildingNo updated on 29-may-2020
                floorNo: req.body.floorNo, //floorNo updated on 29-may-2020
                sectionNo: req.body.sectionNo, //sectionNo updated on 29-may-2020
                cubeNo: req.body.cubeNo, //cubeNo updated on 29-may-2020
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
        res.status(500).send(err);
    }
});

router.get("/api/userflag", async(req, res) => {
    const Email = req.query.email;
    let dateObj = new Date();
    today = dateObj.toDateString();
    try {
        const URes = await userResponse
            .find({ email: Email })
            .limit(1)
            .sort({ $natural: -1 });
        let udate = URes[0].updatedAt.toDateString();
        let q1_res = URes[0].response[0].answer;
        let q2_res = URes[0].response[1].answer;
        let q3_res = URes[0].response[2].answer;
        if (udate == today) {
            //below is changed from == to ===
            if (q1_res === false && q2_res === false && q3_res === false) {
                res.status(200).json({ updated: "yes", colorCode: "green" });
            } else {
                res.status(200).json({ updated: "yes", colorCode: "amber" });
            }

        } else {
            res.status(500).json({ updated: "No", colorCode: "" });
        }
    } catch (err) {
        res.status(500).json({ message: "user not found" });
    }
});

router.post("/api/dashboard/", async(req, res) => {
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

        const question = await userResponse.find().limit(1);
        const question1 = question[0].response[0].shortText;
        const question2 = question[0].response[1].shortText;
        const question3 = question[0].response[2].shortText;

        res.json({
            "question1": question1,
            q1_count: {
                "postive": q1_counting_positive,
                "negative": q1_counting_negative,
            },
            "question2": question2,
            q2_count: {
                "positive": q2_counting_positive,
                "negative": q2_counting_negative,
            },
            "question3": question3,
            q3_count: {
                "positive": q3_counting_positive,
                "negative": q3_counting_negative,
            },
        });
    } catch (err) {
        res.status(500).json({ message: "match not found" });
    }
});

module.exports = router;