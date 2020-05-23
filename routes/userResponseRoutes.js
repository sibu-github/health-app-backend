const express = require('express');
const router = new express.Router()
const mongoose = require('mongoose');

const userResponse = require('../models/userResponse');
const Location = require('../models/locationList');
const question = require('../models/questions');
const userinfo = require('../models/userInfo');
const apilog = require('../models/apilog');

router.post('/api/userResponse', async(req, res) => {
    try {
        //console.log(req.body);

        // const Response = new response(req.body);
        // await Response.save();
        // res.send(Response);

        location = await Location.find({ locationName: req.body.locationName });
        console.log(location[0].locationName);
        if (location) {


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
            res.send(Response);
            // res.send(location.locationName, location.locationType, location._id, location.country, location.region);
        }
        // console.log(location);
        // res.send(location)
    } catch (err) {
        res.send(err);
        console.log(err);
    }
});


router.get('/api/dashboard/', async(req, res, next) => {
    try {
        q1_counting_positive = await userResponse.aggregate([{
                "$match": {
                    locationName: req.body.locationName,
                    locationType: req.body.locationType,
                    country: req.body.country,
                    region: req.body.region,
                    "response.0.answer": true
                }
            },
            {
                $count: "postive"

            },

        ]);

        q2_counting_positive = await userResponse.aggregate([{
                "$match": {
                    locationName: req.body.locationName,
                    locationType: req.body.locationType,
                    country: req.body.country,
                    region: req.body.region,
                    "response.1.answer": true
                }
            },
            {
                $count: "postive"

            }
        ]);
        q3_counting_positive = await userResponse.aggregate([{
                "$match": {
                    locationName: req.body.locationName,
                    locationType: req.body.locationType,
                    country: req.body.country,
                    region: req.body.region,
                    "response.2.answer": true
                }
            },
            {
                $count: "postive"

            }

        ]);

        q1_counting_negative = await userResponse.aggregate([{
                "$match": {
                    locationName: req.body.locationName,
                    locationType: req.body.locationType,
                    country: req.body.country,
                    region: req.body.region,
                    "response.0.answer": false
                }
            },
            {
                $count: "negative"

            }

        ]);

        q2_counting_negative = await userResponse.aggregate([{
                "$match": {
                    locationName: req.body.locationName,
                    locationType: req.body.locationType,
                    country: req.body.country,
                    region: req.body.region,
                    "response.1.answer": false
                }
            },
            {
                $count: "negative"

            }
        ]);


        q3_counting_negative = await userResponse.aggregate([{
                "$match": {
                    locationName: req.body.locationName,
                    locationType: req.body.locationType,
                    country: req.body.country,
                    region: req.body.region,
                    "response.0.answer": false
                }
            },
            {
                $count: "negative"

            }

        ]);

        res.send({
            "global_response": {
                "q1_count": { "postive": q1_counting_positive, "negative": q1_counting_negative },
                "q2_count": { "positive": q2_counting_positive, "negative": q2_counting_negative },
                "q3_count": { "postive": q3_counting_positive, "negative": q3_counting_negative }
            }
        });




    } catch (err) {
        res.send(err);
    }
});




module.exports = router;