var mongoose = require('mongoose');
var User = require('./userModel');

var NotificationModel = new mongoose.Schema({
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
        status: String
});

module.exports = mongoose.model("Post", NotificationModel);



// const mongoose = require('mongoose');
// const Property = require('./property');
// const User = require('./userModel')
//
// const Schema = mongoose.Schema;
//
// const notificationsSchema = new Schema({
//      details: {
//         // buyer: {
//         //     user:{ type: Schema.Types.ObjectId, ref: 'User' }
//         // },
//         // seller: {
//         //     user:{ type: Schema.Types.ObjectId, ref: 'User' }
//         // },
//         property:{ type: Schema.Types.ObjectId, ref: 'Property' }
//      },
//     // actor: String,
//     // status: String,
//     // type: String
// });
//
// module.exports = mongoose.model('Notification', notificationsSchema);
