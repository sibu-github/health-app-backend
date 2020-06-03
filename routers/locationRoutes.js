const mongoose = require('mongoose');
const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');

const Location = require('../models/locationList');

router.post('/api/postlocation', auth, async (req, res) => {
  console.log(req.url);
  console.log(req.body);
  try {
    const location = new Location(req.body);
    console.log('before executing the query');
    await location.save();
    console.log('after executing the query');
    //added the json and status
    res.status(200).json(location);
  } catch (err) {
    //added status 500 and message in json
    res.status(500).json({ message: 'enter the proper details' });
  }
});

router.get('/api/getlocation/', auth, async (req, res) => {
  console.log(req.url);
  try {
    console.log('before executing the query');
    const location = await Location.find({ active: true });
    console.log('after executing the query');
    res.status(200).json(location);
  } catch (err) {
    //added status
    res.status(500).json({ message: 'location is not found' });
  }
});

module.exports = router;
