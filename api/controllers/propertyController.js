const Property = require('../models/property');

exports.postAddProduct = (req, res, next) => {
     //Add properties 
    console.log(req.body);
    const newAd = new Property(req.body);
    newAd.save((err,property)=>{
      if(err){
        return res.json({'success':false,'message':'Some Error'});
        }
        return res.json({'success':true,'message':'Property added successfully',property});
    })
};

exports.getEditProduct = (req, res, next) => {
  /*
   * Get Properties for Editing
   */
};

exports.postEditProperty = (req, res, next) => {
  /*
   *Edit Properties
   */
};

exports.getProperties = (req, res, next) => {
  Property.find()
  .then(products => {
    res.status(200).json(products);
  })
  .catch(err => console.log(err));
};

exports.getNearByProperties = (req, res, next) => {
  Property.find({
    geolocation: 
    { $near: 
      {$geometry: 
        { type: "Point",
          coordinates: [req.query.lat, req.query.lng]},
        $maxDistance: 15000
     }
    }
   }).find((error, results) => {
    if (error) console.log(error);
    res.json(results);
   });
};


exports.filterNearByProperties = (req, res, next) => {
  Property.find({
    geolocation: 
    { $near: 
      {$geometry: 
        { type: "Point",
          coordinates: [req.query.lat, req.query.lng]},
        $maxDistance: 15000
     }
    }
    ,property_type: { $regex: req.query.propertyType}
    ,bedroom : { $gte: req.query.bedroom} 
    ,bathroom :{ $gte: req.query.bathroom}
    ,price :{$gt : req.query.minpriceRange, $lt : req.query.maxpriceRange}
   }).find((error, results) => {
    if (error) console.log(error);
    res.json(results);
   });
};

exports.postDeleteProduct = (req, res, next) => {
  /*
   *Deleting property
   */
};

exports.postDeleteProduct = (req, res, next) => {
  /*
   *Deleting property
   */
};
