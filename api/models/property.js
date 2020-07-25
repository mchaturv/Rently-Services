const mongoose = require('mongoose');
const { object } = require('joi');

const Schema = mongoose.Schema;

const propertySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  property_type:{
    type: String,
    required: true
  },
  property_size:{
    type: Number,
    required: true
  },
  bedroom: {
    type: Number,
    required: true
  },
  bathroom: {
    type: Number,
    required: true
  },
  parking: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rulesanddetails:{
    type: String,
    required: true
  },
  imageurl: {
    type: [String],
    required: true
  },
  geolocation: {
    type: { type: String },
    coordinates: [Number]
   },
  location: {
    streetname: {
      type: String,
      required: true
    },
    postalcode: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  owner:{
      user_id: {
      type: Number,
      required: true
    },
      username:{
      type: String,
      required: true
    }
  }
  
});

propertySchema.index({ geolocation: "2dsphere" });

var property = mongoose.model('Property', propertySchema);
module.exports = property;

