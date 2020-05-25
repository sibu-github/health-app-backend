const app = require('./app.js');

require('./db/mongoose');
const port = process.env.Port
app.listen(port, () => {
    console.log('Server is UP! on port ' + port)
})