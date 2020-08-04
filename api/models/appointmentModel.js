const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    timeSlot: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
