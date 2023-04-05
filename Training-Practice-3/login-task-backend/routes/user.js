var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const _ = require("lodash");
var useDataController = require("../controllers/userDetails");
//var config = require("../config");

/* GET users listing. */
router.post("/", useDataController.createUser);

router.get("/", useDataController.getuserDetails);
router.get("/:id", useDataController.getuserDetail);
router.put("/:id", useDataController.updateUserDetails);
router.delete("/:id", useDataController.deleteUserDetails);

router.post("/user", function (req, res, next) {
  //const body = _.get(req, "body", {});
  const body = req.body;
  if (
    body.email == "srinivaspolaveni@gmail.com" &&
    body.password == "Password@123"
  ) {
    const token = jwt.sign({ role: "admin" }, "helloworld");
    return res.send({ token: token, body: body });
  } else {
    const token = jwt.sign({ role: "guest" }, "helloworld");
    return res.send({ token: token, body: body });
  }
  //return res.send({ success: "true", token: "" });
});

module.exports = router;
