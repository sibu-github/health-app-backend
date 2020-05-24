const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

const question = require('../models/questions');

router.post('/api/updatequestion', async(req, res) => {
    try {
        const Question = new question(req.body);
        await Question.save();
        res.send(Question);
    } catch (err) {
        res.send(err);
    }
});


router.get('/api/questionlist', async(req, res) => {
    try {
        const questionList = await question.find({}, { shortText: 1, longText: 1 });
        res.send(questionList);
    } catch {
        res.send(err);
    }
})

module.exports = router;