const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const question = require("../models/questions");

router.post("/api/updatequestion", auth, async(req, res) => {
    try {
        const Question = new question(req.body);
        await Question.save();
        res.status(200).json(Question);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/api/questionlist", auth, async(req, res) => {
    try {
        const questionList = await question.find({}, { shortText: 1, longText: 1 });
        res.status(200).json(questionList);
    } catch (err) {
        res.status(500).json({ message: "unable to find questionlist" });
    }
});

module.exports = router;