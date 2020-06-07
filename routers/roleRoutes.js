const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const role = require('../models/userrole');

router.get('/api/roles', async(req, res) => {
    let langKey = req.query.languageKey;

    if (langKey) {
        try {
            const Role = await role.find({ languageKey: langKey });
            res.status(200).json(Role);
        } catch (err) {
            //added status 
            res.status(500).json({ message: "location is not found" });
        }
    } else {
        res.status(500).json({ message: "enterlanguagecode in params" });
    }


});


module.exports = router;