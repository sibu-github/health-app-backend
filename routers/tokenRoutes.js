// import modules
const express = require('express');
const router = new express.Router();
const authHelper = require('../authHelper');
// getToken routes, which gives the accessToken from the authCode
router.get('/api/getToken', (req, res) => {
  try {
    const authCode = req.query.code;
    // if code is not received in the query parameters then throw error
    if (!authCode) {
      res.status(500).json({ success: false, message: 'code is required' });
      return;
    }

    // call authHelper method
    authHelper.getTokenFromCode(authCode, tokenReceived, req, res);
  } catch (err) {
    console.error(err);
  }
});

// used as the callback function to receive token
function tokenReceived(req, res, error, token) {
  if (error) {
    console.log('ERROR getting token:' + error);
    res.json({ success: false, message: error });
  } else {
    const accessToken = token.token.access_token;
    const refreshToken = token.token.refresh_token;
    const email = authHelper.getEmailFromIdToken(token.token.id_token);
    res.json({ accessToken, refreshToken, email });
  }
}

module.exports = router;
