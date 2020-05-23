const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

const port = process.env.PORT || 3000;


const userRouter = require('./routes/userResponseroutes');
const locationRouter = require('./routes/locationRoutes')
const userinfoRouter = require('./routes/userInfoRoutes');
const apilogRouter = require('./routes/apilogRoutes');
const questionRouter = require('./routes/quesitonsRoutes');




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(userRouter);
app.use(locationRouter);
app.use(userinfoRouter);
app.use(apilogRouter);
app.use(questionRouter);
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});



// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;