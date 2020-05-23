const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

const question = require('../models/questions');

router.post('/api/updateQuestion', async(req, res) => {
    try {
        const Question = new question(req.body);
        await Question.save();
    } catch (err) {
        res.send(err);
    }
});


router.get('/api/questionlist', async(req, res) => {
    try {
        const questionList = await question.find({}, { shortText: 1, longText: 1 });
    } catch {
        res.send(err);
    }
})

module.exports = router;