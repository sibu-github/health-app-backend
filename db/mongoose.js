const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect("mongodb://localhost:27017/healthapp", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
});