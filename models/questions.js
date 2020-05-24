const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://tars1729:tars1729@mycluster-eljsg.azure.mongodb.net/healthapp?retryWrites=true&w=majority", { useNewUrlParser: true });
const questionSchema = new mongoose.Schema({
    longText: {
        type: String,
        unique: true
    },
    shortText: {
        type: String,
        unique: true
    },
    active: {
        type: Boolean,
        default: true
    },

}, { timestamps: { createdOn: 'created_at', updatedOn: 'updated_at' } });
const question = mongoose.model('question', questionSchema);
module.exports = question;