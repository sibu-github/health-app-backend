var express = require('express');
var router = express.Router();

/*created for the testing of the module */
router.get('/api/', function(req, res, next) {
    res.send('hello world');
});

module.exports = router;