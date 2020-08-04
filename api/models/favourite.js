const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favouriteSchema = new Schema({

    userID: {
        type: String,
        ref: 'User',
        required:true
    },
    propertyID: {
        type: String,
        ref: 'Property',
        required:true
    },
    pID:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('favourite', favouriteSchema);