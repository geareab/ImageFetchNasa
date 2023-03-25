const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const imagesRoutes = require("./routes/images-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/images", imagesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Wrong URL", 404);
  throw error;
});

mongoose
  .connect(
    `mongodb+srv://hitenmittal:mongodbatlasnode@cluster0.ap5u3dr.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(80);
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });
//K8oLFLM1Mdhw79PV