const axios = require("axios");
const apiKey = "MuujTnlZvnHUojydfgquyfWJAzyo8SH0c2Ng3dRc";

var config = {
  method: "get",
  timeout: 5000,
  url: "https://api.nasa.gov/planetary/apod?api_key=" + apiKey,
};

const getImage = async (req, res, next) => {
  axios(config)
    .then(function (response) {
      if (response) {
        res.json(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  // let places;
};

exports.getImage = getImage;
