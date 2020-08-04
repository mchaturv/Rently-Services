const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const config = require("../../config.json");

exports.loginUser = (req, res, next) => {
  User.find({
    email: req.body.email,
  })
    .exec()
    .then((data) => {
      if (data.length == 0) {
        res.status(400).json({
          message: "User not found",
        });
      } else if (data[0].password === req.body.password) {
        const token = jwt.sign({ sub: data[0].id }, config.secret, {
          expiresIn: "7d",
        });
        // console.log("user id: " + jwt.decode(token).sub);
        // var mongoose = require('mongoose');
        // var id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
        // {"_id":{"$oid":"5f17152f2e6b7f5064b53c13"},
        // {"_id":{"$oid":"5f1a476171f5390a2b151c81"},

        res.status(200).send({
          name: data[0].name,
          email: data[0].email,
          token: token,
        });
      } else {
        res.status(400).json({
          message: "Incorrect credentials",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addUser = (req, res, next) => {
  var new_user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  new_user.save(function (err) {
    if (err) return console.log(err);

    // user added
    res.status(200);
    res.send({
      message: "user added successfully",
      name: req.body.name,
      email: req.body.email,
    });
  });
};
