var express = require("express");
var router = express.Router();

/* GET users listing. */
var userController = require("../controllers/userDetails");
router.get("/login", userController.getProduct);
module.exports = router;
