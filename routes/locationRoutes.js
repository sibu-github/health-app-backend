const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');

const Location = require('../models/locationList');

router.post('/api/location/', async(req, res) => {

    try {
        console.log(req.body);
        const location = new Location(req.body);
        await location.save();
        // await location.save();
        res.send(location);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

router.get('/api/getlocation/', async(req, res) => {

    try {
        const location = await Location.find({}, { locationName: 1 })
        res.send(location);

    } catch (err) {
        res.send(err)
    }

});


module.exports = router;