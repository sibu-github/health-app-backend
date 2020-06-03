const mongoose = require('mongoose');
console.log('Mongo DB URL:', process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
