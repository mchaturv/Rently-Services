const Favourite = require('../models/favourite');
const jwt = require("jsonwebtoken");
const config = require("../../config.json");
const mongoose = require('mongoose');


exports.saveFavourite = (req, res, next) => {
     //Add favourite 
     let authHeader= req.headers.authorization;
     let sessionID = authHeader.split(' ')[1];
     let user=jwt.decode(sessionID).sub;
     var pId = req.body.propertyID;
     var newFavourite = new Favourite({
      "userID": user,
      "propertyID" : pId,
      "pID" : pId
    });
    
    newFavourite.save((err,docs)=>{
      if(err){
        return res.json({'success':false,'message':'Some Error'});
        }
        return res.json({'success':true,'message':'Added successfully',docs});
    })
};



exports.deleteFavourite =(req,res,next) =>{
  let authHeader= req.headers.authorization;
  let sessionID = authHeader.split(' ')[1];
  let user=jwt.decode(sessionID).sub;
  var pId = req.query.property
  Favourite.deleteOne(
    { "userID": user,
      "pID": pId,
    }, function (err,docs) {
    if (err) {console.log(err);}
    else {
      if(docs.deletedCount>0) {
        return res.status(200).json("Deleted Successfully")}
        else
        {return res.status(200).json("unable to delete")}
    }
  });
}

exports.getFavourite = (req, res, next) => {
    let authHeader= req.headers.authorization;
    let sessionID = authHeader.split(' ')[1];
    let user=jwt.decode(sessionID).sub;
    Favourite.find({ userID: user })
          .populate('propertyID').exec((err, product) => {
            if(err)
            {
              res.status(404).message("error occured");
            }
            else{
              res.status(200).json(product);
            }
            
    })
  };


