const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const auth = require('../middleware/auth');

const userResponse = require("../models/userResponse");
const Location = require("../models/locationList");
const { find } = require("../models/userResponse");

/*api for the saving the user Responses*/
router.post("/api/userResponse", auth, async(req, res) => {
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
            res.status(200).json({ message: "Location not found" });
        }
    } catch (err) {
        res.status(500).json({ "error": err });
    }
});

/*API for checking the user has updated for the day and also color coding for yes and no*/
router.get("/api/userflag", auth, async(req, res) => {
    const Email = req.query.email;
    let dateObj = new Date();
    today = dateObj.toDateString();
    try {
        const URes = await userResponse
            .find({ email: Email })
            .limit(1)
            .sort({ $natural: -1 });

        /**
         * Bug Fix: 
         * User hasn't submitted any response previously
         * "User Not Found" snackbar shown in the frontend
         */
        if(URes.length === 0){
            res.status(200).json({ updated: "No", colorCode: "" });
            return
        }


        let udate = URes[0].updatedAt.toDateString();
        let q1Res = URes[0].response[0].answer;
        let q2Res = URes[0].response[1].answer;
        let q3Res = URes[0].response[2].answer;
        if (udate == today) {
            //below is changed from == to ===
            if (q1Res === false && q2Res === false && q3Res === false) {
                res.status(200).json({ updated: "yes", colorCode: "green" });
            } else {
                res.status(200).json({ updated: "yes", colorCode: "amber" });
            }

        } else {
            res.status(200).json({ updated: "No", colorCode: "" });
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'An error occurred' });
    }
});

/*api for the HR Dashboard*/
router.post("/api/dashboard/", auth, async(req, res) => {
    let fromDate = req.body.fromDate;
    let toDate = req.body.toDate;
    let locationName = req.body.locationName;

    try {
        const findBy = {}
        // when filter by fromDate and toDate
        if(fromDate){
            findBy.updatedAt = {}
            findBy.updatedAt["$gte"] = new Date(fromDate)
        }

        if(toDate){
            if(findBy.updatedAt){
                findBy.updatedAt["$lte"] = new Date(toDate)
            } else {
                findBy.updatedAt = {} 
                findBy.updatedAt["$lte"] = new Date(toDate)
            }
        }


        // when filter by locationName
        if(locationName){
            findBy.locationName = locationName;
        }

        // query the database 
        let results = await userResponse.find(findBy)
        let q1Positive = results.filter(q=>q.response[0].answer).length
        let q2Positive = results.filter(q=>q.response[1].answer).length
        let q3Positive = results.filter(q=>q.response[2].answer).length
        let q1Negative = results.filter(q=>!q.response[0].answer).length
        let q2Negative = results.filter(q=>!q.response[1].answer).length
        let q3Negative = results.filter(q=>!q.response[2].answer).length
        res.status(200).json({q1Positive, q2Positive, q3Positive, q1Negative, q2Negative, q3Negative, success: true})
    } catch(err){
        console.error(err)
        res.status(500).json({success: false, message: err})
    }
});

// android app version check by dinesh kr
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
        res.status(500).send(err);
    }
});

module.exports = router;