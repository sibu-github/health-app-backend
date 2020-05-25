const mongoose = require('mongoose');
const express = require('express');
const router = new express.Router();
const userinfo = require('../models/userInfo');
const location = require('../models/locationList');
const url = require('url');

router.post('/api/userinfo', async(req, res) => {
    try {
        const Location = await location.find({ locationName: req.body.locationName });
        if (Location) {
            const userInfo = new userinfo({
                email: req.body.email,
                phone: req.body.phone,
                locationId: Location[0]._id,
                locationName: Location[0].locationName
            });
            await userInfo.save();
            res.status(200).send({ userInfo });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/api/userdetails', async(req, res) => {
    try {
        const email = req.query.email
        const userdetails = await userinfo.find({ email: email });
        res.send({ userdetails });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;