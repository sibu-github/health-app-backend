const mongoose = require('mongoose');
const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');

const Location = require('../models/locationList');

router.post('/api/postlocation', auth, async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    //added the json and status
    res.status(200).json(location);
  } catch (err) {
    //added status 500 and message in json
    res.status(500).json({ message: 'enter the proper details' });
  }
});

router.get('/api/getlocation/', auth, async (req, res) => {
  console.log('in the location router');

  console.log('MONGODB_URL', process.env.MONGODB_URL);
  console.log('CLIENT_ID', process.env.CLIENT_ID);
  console.log('CLIENT_SECRET', process.env.CLIENT_SECRET);
  console.log('TENANT_ID', process.env.TENANT_ID);
  console.log('REDIRECT_URL', process.env.REDIRECT_URL);
  console.log('JWT_SECRET_KEY', process.env.JWT_SECRET_KEY);

  try {
    console.log('before query');
    const location = await Location.find({ active: true });
    console.log('after query');
    res.status(200).json(location);
  } catch (err) {
    //added status
    res.status(500).json({ message: 'location is not found' });
  }
});

module.exports = router;
