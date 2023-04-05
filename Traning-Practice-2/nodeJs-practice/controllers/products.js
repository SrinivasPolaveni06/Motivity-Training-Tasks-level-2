const productModel = require("../models/products");
// const { param } = require("../routes/products");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
var config = require("../config");

const createProduct = function (req, res, next) {
  if (isNaN(_.get(req, "body.price"))) {
    return res.status(422).send({ err: "price sholud be number" });
  }

  const product = new productModel(req.body);
  // product.title=req.body.title;
  // product.image=req.body.image;
  // product.description=req.body.description;

  product.save(function (err, data) {
    if (err) {
      return res.status(422).send(err);
    }
    return res.send(data);
  });
  //return res.send({sucess:true,body:req.body,product:product})
};

const getProducts = function (req, res, next) {
  productModel.find({}, function (err, data) {
    //return res.send("iam a products list");

    return res.send(data);
  });
};
const getProduct = function (req, res, next) {
  // res.send(req.params);
  // productModel.find({},function(err,data){
  //          //return res.send("iam a products list");
  //          return res.send(data);
  //      })

  // const id=req?.abcd?.id;                              this is typescript
  // const id=req && req.abcd && req.abcd.id;             this is new js
  // let id;
  // if (req){                                            this is normal js but these three types are gives same answer
  //     if(req.abcd){
  //         if(req.abcd.id){
  //           id=req.abcd.id;
  //         }
  //     }
  // }

  //const id=req.params.id;
  const id = _.get(req, "params.id", null);
  productModel.findById(id, function (err, data) {
    //return res.send("iam a products list");
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};

const updateProduct = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  const body = _.get(req, "body", {});
  productModel.findByIdAndUpdate(id, body, function (err, data) {
    //return res.send("iam a products list");
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};
const deleteProduct = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.send({ success: false, message: "You are not authorized" });
  }
  const token = authorization.split("Bearer ");
  const decoded = jwt.verify(token[1], config.JWT_secret);
  if (decoded.role != "administrator") {
    return res.send({ success: false, message: "You are not authorized" });
  }
  return res.send({ success: true, decoded: decoded });

  productModel.findByIdAndDelete(id, function (err, data) {
    //return res.send("iam a products list");
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
