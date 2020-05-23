const mongoose = require('mongoose');
const express = require('express');
const router = new express.Router();
const userinfo = require('../models/userInfo');
const location = require('../models/locationList');


router.post('/api/userinfo', async(req, res) => {
    try {
        const Location = await location.find({ locationName: req.body.locationName });
        console.log(Location);
        if (Location) {
            const userInfo = new userinfo({
                email: req.body.email,
                phone: req.body.phone,
                locationId: Location[0]._id,
                locationName: Location[0].locationName
            });
            await userInfo.save();
            res.send(userInfo);
        }
    } catch (err) {
        res.send(err);
    }
});

router.get('/api/userdetails', async(req, res) => {
    try {

        const userdetails = await userinfo.find({ email: req.body.email });
        res.send({ phone: userdetails[0].phone, userLocationId: userdetails[0].locationId, userLocation: userdetails[0].locationName })
    } catch (err) {
        res.send(err);
    }


});




module.exports = router;