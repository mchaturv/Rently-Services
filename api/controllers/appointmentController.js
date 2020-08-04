const Appointment = require("../models/appointmentModel");
const jwt = require("jsonwebtoken");
const config = require("../../config.json");
const Notification = require('../models/notificationModel');
const Property = require('../models/property');
const User = require('../models/userModel');
const objectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');

exports.addAppointment = (req, res, next) => {
  var new_appointment = new Appointment({
    propertyId: req.body.propertyId,
    userId: req.body.userId,
    timeSlot: req.body.timeSlot,
  });

  new_appointment.save( async function (err) {
    if (err) return console.log(err);

    // appointment added
    //create appointment notification
    //Author: Vikram
    const originUserID = req.body.userId;
    const propertyID = req.body.propertyId;

    const property = await Property.findOne({_id: objectID(propertyID)});
    const tenant = await User.findOne({_id: objectID(originUserID)});
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
      res.status(200);
      res.send({
        message: "appointment added successfully",
        propertyId: req.body.propertyId,
        timeSlot: req.body.timeSlot,
      });
    })
    //End: create appointment notification
  });
};
