'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const DIST_FOLDER = './dist';
const INDEX_FILE_NAME = 'index.html';

// App
const app = express();

app.use(express.static(path.join(__dirname, DIST_FOLDER)));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, DIST_FOLDER, INDEX_FILE_NAME));
});

let port = process.env.PORT || PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
