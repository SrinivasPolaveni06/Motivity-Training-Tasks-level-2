var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
var config = require("../config");

/* GET users listing. */
router.post("/login", function (req, res, next) {
  const body = req.body;
  if (body.username == "admin" && body.password == "Password@123") {
    var token = jwt.sign({ role: "administration" }, config.JWT_secret);
    return res.send({ token: token });
  }
  if (body.username == "guest" && body.password == "Password@123") {
    var token = jwt.sign({ role: "guest" }, config.JWT_secret);
    return res.send({ token: token });
  } else {
    return res.status(422).send({ message: "UnAuthorized" });
  }

  //res.send('respond with a resource');
});

module.exports = router;
