const axios = require("axios");
const apiKey = "MuujTnlZvnHUojydfgquyfWJAzyo8SH0c2Ng3dRc";

var config = {
  method: "get",
  timeout: 5000,
  url: "https://api.nasa.gov/planetary/apod?api_key=" + apiKey,
  // headers: {
  //   Cookie: "MoodleSession=" + sessionIds[randKey],
  //   "Content-Type": "application/x-www-form-urlencoded",
  // },
};

const getImage = async (req, res, next) => {
  axios(config)
    .then(function (response) {
      if (response) {
        console.log(response.data);
        res.json(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  // let places;
};

exports.getImage = getImage;
