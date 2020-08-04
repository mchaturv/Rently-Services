const Notification = require('../models/notificationModel');
const Property = require('../models/property');
const User = require('../models/userModel');
const objectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');

exports.getNotifications = (req, res, next) => {

    const user = req.body.userID;

    Notification.find({$or: [{
            buyer: objectID(user)
        }, {
            seller: objectID(user)
        }]
    }).populate({path:'property',select:'title imageurl'})
        .populate('seller')
        .populate('buyer')
        .exec(function (err, notification) {
            res.status(200).json(notification);
        })
};


exports.createNotification = async (req, res, next) => {

    const originID = req.body.userID;
    const propertyID = req.body.propertyID;

    const property = await Property.findOne({_id: objectID(propertyID)});
    const tenant = await User.findOne({_id: objectID(originID)});
    const seller = await User.findOne({email: property.owner.email});

    const notification = new Notification({
        _id: new mongoose.Types.ObjectId(),
        property: property._id,
        seller: seller._id,
        buyer: tenant._id,
        actor: "seller",
        status: "new",
        type: "appointment"
    })

    notification.save(err => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.send("Notification created");
    })

};

exports.updateNotification = async (req, res)=>{
    let notificationID=req.body.id;
    let update={status: req.body.status, actor:req.body.actor};

    await Notification.findByIdAndUpdate({_id:notificationID}, update, {new:true},
        (err, result)=>{
        res.send(result);
    });

};
