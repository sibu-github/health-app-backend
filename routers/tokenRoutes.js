// import modules
const express = require('express');
const axios = require('axios');
const router = new express.Router();
const authHelper = require('../authHelper');

// refreshToken when accessToken is expired
router.get('/api/getNewTokens', (req, res) => {
  const token = req.query.refreshToken;
  // exit when refreshToken is not passed
  if (!token) {
    res.json({ success: false, message: 'refreshToken is required' });
    return;
  }

  // get new tokens from the refresh token
  authHelper.getTokenFromRefreshToken(token, tokenReceived, req, res);
});

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
async function tokenReceived(req, res, error, token) {
  try {
    // if error returned while getting token
    if (error) {
      console.log('ERROR getting token:' + error);
      res.json({ success: false, message: error });
      return;
    }

    // get accessToken, refreshToken and user details
    const accessToken = token.token.access_token;
    const refreshToken = token.token.refresh_token;
    // const email = authHelper.getEmailFromIdToken(token.token.id_token);
    const user = await getUserDetails(accessToken);
    res.json({ accessToken, refreshToken, user });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err });
  }
}

// use access token to get user details
async function getUserDetails(access_token) {
  const graphApiEndpoint = 'https://graph.microsoft.com/v1.0/me';
  // exit if access_token is not present
  if (!access_token) {
    return false;
  }

  try {
    const bearer = 'Bearer ' + access_token;
    const headers = { Authorization: bearer };
    const result = await axios.get(graphApiEndpoint, { headers });
    if (result.data.id) {
      return {
        id: result.data.id,
        firstName: result.data.givenName,
        lastName: result.data.surname,
        email: result.data.mail,
        jobTitle: result.data.jobTitle,
        location: result.data.officeLocation,
        phone: result.data.mobilePhone,
      };
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}

module.exports = router;
