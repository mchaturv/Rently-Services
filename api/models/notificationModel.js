const mongoose = require('mongoose');
const User = require('./userModel');

const NotificationModel = new mongoose.Schema({
        property: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Property'
        },
        seller: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
        },
        buyer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
        },
        actor: String,
        status: String,
        type:String
});

module.exports = mongoose.model("Notification", NotificationModel);
