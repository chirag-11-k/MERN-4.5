const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    message : {
        type : String,
        maxLength : 50
    },
    createdAt : {
        type : Date,
        required : true
    }
});

//Model creation
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat; //Chat export