// the scopes parameter values to call Azure AD API
const scopes = ['openid', 'profile', 'offline_access'];

// credentials to call Azure AD API
const credentials = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  site: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
  authorizationPath: '/oauth2/v2.0/authorize',
  tokenPath: '/oauth2/v2.0/token',
};
// import oauth2 module
const oauth2 = require('simple-oauth2')(credentials);

// get auth url
const getAuthUrl = () => {
  const returnVal = oauth2.authCode.authorizeURL({
    redirect_uri: process.env.REDIRECT_URL,
    scope: scopes.join(' '),
  });
  return returnVal;
};

// get token from auth code
const getTokenFromCode = (auth_code, callback, request, response) => {
  oauth2.authCode.getToken(
    {
      code: auth_code,
      redirect_uri: process.env.REDIRECT_URL,
      scope: scopes.join(' '),
    },
    function (error, result) {
      if (error) {
        callback(request, response, error, null);
      } else {
        const token = oauth2.accessToken.create(result);
        callback(request, response, null, token);
      }
    }
  );
};

// get email from the ID Token
const getEmailFromIdToken = (id_token) => {
  // JWT is in three parts, separated by a '.'
  const token_parts = id_token.split('.');
  // Token content is in the second part, in urlsafe base64
  const encoded_token = new Buffer(
    token_parts[1].replace('-', '+').replace('_', '/'),
    'base64'
  );
  const decoded_token = encoded_token.toString();
  const jwt = JSON.parse(decoded_token);
  // Email is in the preferred_username field
  return jwt.preferred_username;
};

// get token from the refresh token
const getTokenFromRefreshToken = (
  refresh_token,
  callback,
  request,
  response
) => {
  const token = oauth2.accessToken.create({
    refresh_token: refresh_token,
    expires_in: 0,
  });
  token.refresh(function (error, result) {
    if (error) {
      callback(request, response, error, null);
    } else {
      callback(request, response, null, result);
    }
  });
};

// export module
module.exports = {
  getAuthUrl,
  getTokenFromCode,
  getTokenFromRefreshToken,
  getEmailFromIdToken,
};
