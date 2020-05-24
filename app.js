const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const bodyparser = require('body-parser');

const DIST_FOLDER = './dist';
const INDEX_FILE_NAME = 'index.html';

const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;

const userRouter = require('./routes/userResponseroutes');
const locationRouter = require('./routes/locationRoutes');
const userinfoRouter = require('./routes/userInfoRoutes');
const apilogRouter = require('./routes/apilogRoutes');
const questionRouter = require('./routes/quesitonsRoutes');

// for serving static files
app.use(express.static(path.join(__dirname, DIST_FOLDER)));

// for serving the angular code,
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, DIST_FOLDER, INDEX_FILE_NAME));
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PATCH,DELETE,OPTIONS'
  );
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
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
