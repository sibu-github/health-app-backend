const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userResponseRoutes');
const locationRouter = require('./routers/locationRoutes');
const userinfoRouter = require('./routers/userInfoRoutes');
const apilogRouter = require('./routers/apilogRoutes');
const questionRouter = require('./routers/questionsRoutes');
const adminRouter = require("./routers/hradminRoutes");
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