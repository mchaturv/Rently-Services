const User = require("../models/userModel");

exports.addUser = (req, res, next) => {
  let user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  var new_user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  new_user.save(function (err) {
    if (err) return console.log(err);

    // user added!
    res.status(200);
    res.send({
      message: "user added successfully",
      name: req.body.name,
      email: req.body.email,
    });
  });
};
