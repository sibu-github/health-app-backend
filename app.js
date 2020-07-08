const express = require("express");
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");
const userRouter = require("./routers/userResponseRoutes");
const locationRouter = require("./routers/locationRoutes");
const userinfoRouter = require("./routers/userInfoRoutes");
const apilogRouter = require("./routers/apilogRoutes");
const questionRouter = require("./routers/questionsRoutes");
const adminRouter = require("./routers/hradminRoutes");
const tokenRouter = require("./routers/tokenRoutes");
const versionRouter = require("./routers/appVersionRoutes");
const redeemCodeRouter = require("./routers/redeemCodes");
//jwt JwtTokenRouter
const JwtTokenRouter = require("./routers/jwtAuthRoutes");
const morgan = require("morgan");

const DIST_FOLDER = "./dist";
const INDEX_FILE_NAME = "index.html";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
  next();
});

// added for compression of the response
app.use(compression());

//morgan logger
app.use(morgan("combined"));
morgan("combined");

morgan(":remote-addr :method :url");

morgan(function (tokens, req, res) {
  return req.method + " " + req.url;
});

// all API routes
app.use(userRouter);
app.use(locationRouter);
app.use(userinfoRouter);
app.use(apilogRouter);
app.use(questionRouter);
app.use(adminRouter);
app.use(tokenRouter);
app.use(JwtTokenRouter);
app.use(versionRouter);
app.use(redeemCodeRouter);

// for serving static files
app.use(express.static(path.join(__dirname, DIST_FOLDER)));

// for getting response after authentication
app.get("/logincomplete", (req, res) => {
  const code = req.query.code;
  console.log({ code });
  res.sendFile(path.join(__dirname, "logincomplete.html"));
});

// for serving the angular bundle to the browser
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, DIST_FOLDER, INDEX_FILE_NAME));
});

module.exports = app;
