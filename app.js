const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const userRouter = require('./routers/userResponseRoutes');
const locationRouter = require('./routers/locationRoutes');
const userinfoRouter = require('./routers/userInfoRoutes');
const apilogRouter = require('./routers/apilogRoutes');
const questionRouter = require('./routers/questionsRoutes');
const adminRouter = require("./routers/hradminRoutes");
const DIST_FOLDER = './dist';
const INDEX_FILE_NAME = 'index.html';

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
        next();
    })
    // for serving static files
app.use(express.static(path.join(__dirname, DIST_FOLDER)));

// for serving the angular code,
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, DIST_FOLDER, INDEX_FILE_NAME));
});

app.use(userRouter);
app.use(locationRouter);
app.use(userinfoRouter);
app.use(apilogRouter);
app.use(questionRouter);
app.use(adminRouter);
app.get('/login', (req, res) => {
    res.send('Hello World')

})


module.exports = app;