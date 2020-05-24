const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');

const Location = require('../models/locationList');

router.post('/api/postlocation/', async(req, res) => {
    console.log("##################### POST #####################");
    try {
        console.log(req.body);
        const location = new Location(req.body);
        await location.save();
        res.send(location);
    } catch (err) {
        console.log(err);
        res.send(err);

    }
})

router.get('/api/getlocation/', async(req, res) => {
    console.log("############################## 1 #################################");
    try {
        console.log("############################## 2 #################################");
        const location = await Location.find({ active: true }, { locationName: 1 })
        console.log("############################## 3 #################################");
        res.send(location);
        console.log("############################## 4 #################################");

    } catch (err) {
        res.send(err)
    }

});


module.exports = router;