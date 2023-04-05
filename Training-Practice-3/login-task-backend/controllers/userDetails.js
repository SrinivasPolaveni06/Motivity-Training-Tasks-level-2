const userSchema = require("../model/userSchema");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

// const getProduct = function (req, res, next) {
//   const id = _.get(req, "params.id", null);
//   const authorization = req.headers.authorization;
//   if (!authorization) {
//     return res.send({ success: false, message: "You are not authorized" });
//   }

//   return res.send({ success: true, result: "hello" });

//   userSchema.findByIdAndDelete(id, function (err, data) {
//     //return res.send("iam a products list");
//     if (err) {
//       return res.status(404).send(err);
//     }
//     return res.send(data);
//   });
// };

const getuserDetails = function (req, res, next) {
  userSchema.find({}, function (err, data) {
    //return res.send("iam a products list");

    return res.send(data);
  });
};

const getuserDetail = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  userSchema.findById(id, function (err, data) {
    //return res.send("iam a products list");

    return res.send(data);
  });
};

const createUser = function (req, res, next) {
  const user = new userSchema(req.body);
  // product.title=req.body.title;
  // product.image=req.body.image;
  // product.description=req.body.description;

  user.save(function (err, data) {
    if (err) {
      return res.status(422).send(err);
    }
    return res.send(data);
  });
  //return res.send({sucess:true,body:req.body,product:product})
};

const updateUserDetails = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  const body = _.get(req, "body", {});
  const authorization = req.headers.authorization;
  console.log(authorization);
  if (!authorization) {
    return res.status(401).send({
      success: false,
      message: "You are not authorized",
      message2: "for Testing",
    });
  }
  const token = authorization.split(" ");
  const decoded = jwt.verify(token[1], "helloworld");
  console.log(token[1]);
  if (decoded.role != "admin") {
    return res
      .status(401)
      .send({ success: false, message: "You are not authorized" });
  } else {
    userSchema.findByIdAndUpdate(id, body, function (err, data) {
      //return res.send("iam a products list");
      if (err) {
        return res.status(404).send(err);
      }
      return res.status(200).send(data);
    });
  }
};

const deleteUserDetails = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  const authorization = req.headers.authorization;
  console.log(authorization);
  if (!authorization) {
    return res.status(401).send({
      success: false,
      message: "You are not authorized",
      message2: "for Testing",
    });
  }
  const token = authorization.split(" ");
  const decoded = jwt.verify(token[1], "helloworld");
  console.log(token[1]);
  if (decoded.role != "admin") {
    return res
      .status(401)
      .send({ success: false, message: "You are not authorized" });
  } else {
    userSchema.findByIdAndDelete(id, function (err, data) {
      if (err) {
        return res.status(404).send(err);
      } else {
        return res.send(data);
      }
    });
  }
};

module.exports = {
  createUser,
  getuserDetails,
  deleteUserDetails,
  getuserDetail,
  updateUserDetails,
};
