const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

const apilog = require("../models/apilog");

/*API for the posting the log*/
router.post("/api/apilog", async(req, res) => {
    try {
        const log = new apilog(req.body);
        await log.save();
        //added the response in json format 
        res.json(log);
    } catch (err) {
        //added status 500 and json
        res.status(500).json(err);
    }
});

/*API for fetching all the log information*/
router.get("/api/apiloginfo", async(req, res) => {
    try {
        const loginfo = await apilog.find();
        //added the status as 200 and response in json
        res.status(200).json(loginfo);
    } catch (err) {
        //added the status 500 and 
        res.status(500).json(err);
    }
});

module.exports = router;