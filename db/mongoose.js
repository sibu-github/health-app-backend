const mongoose = require('mongoose');
const validator = require('validator');
require('dotenv/config');

mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});