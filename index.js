// import all environment varibales
require('dotenv').config();
const app = require('./app.js');
require('./db/mongoose');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is UP!' + port);
});