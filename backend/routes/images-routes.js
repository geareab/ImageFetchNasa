const express = require("express");
const imagesControllers = require("../controllers/images-controllers");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.get("/fetch/:uid", checkAuth, imagesControllers.getImage);

module.exports = router;
