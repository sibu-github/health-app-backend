'use strict';

var jwt = require('jsonwebtoken');
 
var privateKey = "9785$#%8776kfsdak"


module.exports = {

    ensureAuthorized: ensureAuthorized,
     
}
function ensureAuthorized(req, res, next) {
    
    var bearerHeader = req.headers["token"] 
    console.log("bearerHeader ",bearerHeader)
    
        jwt.verify(bearerHeader, privateKey, function (err, decoded) {
            req.user = decoded;
            if (err) {
                console.log("errro ++++++++++++++++++ ",err)
                return res.send({
                    code: 401,
                    message: 'Invalid Token!'
                });
            }
            console.log("Decode>>>>> ",decoded)
            next();
        });
      
}



 





 