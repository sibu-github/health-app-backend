const jwt = require('jsonwebtoken');

//middleware to check the JWT Token 
const auth = async(req, res, next) => {
    const privateKey = process.env.JWT_SECRET_KEY; // JWT_SECRET_KEY is env variable 
    const Token = req.header('Authorization').replace('Bearer', '');
    console.log(Token);
    try {
        jwt.verify(Token, privateKey, function(err, decoded) {
            req.user = decoded;
            if (err) {
                console.log("errro ++++++++++++++++++ ", err);
                return res.send({
                    code: 401,
                    message: 'Invalid Token!'
                });
            }
            console.log("Decode>>>>> ", decoded);
            next();
        });
    } catch (err) {
        res.status(401).send({ error: 'Please authenticate.' });
    }

};

module.exports = auth;