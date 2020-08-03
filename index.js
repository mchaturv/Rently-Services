const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const jwt = require("./jwt");
const port = process.env.PORT || 3100;
const server = http.createServer(app);
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const propertyRoute = require("./api/routes/propertyRoute");
const faqRoute = require("./api/routes/faqRoute");
const userRoute = require("./api/routes/userRoute");
const appointmentRoute = require("./api/routes/appointmentRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(jwt());

app.use("/api/properties", propertyRoute);
app.use("/api/faqs", faqRoute);
app.use("/api/users", userRoute);
app.use("/api/appointments", appointmentRoute);

mongoose
  .connect(
    "mongodb+srv://Admin:Admin123@rently-cluster.pa5pa.mongodb.net/rently?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(port);
