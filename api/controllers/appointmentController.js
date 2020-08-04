const Appointment = require("../models/appointmentModel");
const jwt = require("jsonwebtoken");
const config = require("../../config.json");

exports.addAppointment = (req, res, next) => {
  var new_appointment = new Appointment({
    propertyId: req.body.propertyId,
    userId: req.body.userId,
    timeSlot: req.body.timeSlot,
  });

  new_appointment.save(function (err) {
    if (err) return console.log(err);

    // appointment added
    res.status(200);
    res.send({
      message: "appointment added successfully",
      propertyId: req.body.propertyId,
      timeSlot: req.body.timeSlot,
    });
  });
};
