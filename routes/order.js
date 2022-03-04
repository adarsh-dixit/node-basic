const order = require("../controllers/order.controller");
  var router = require("express").Router();
  // Retrieve all userss

  console.log("order")
  router.post("/order", order.create);
  module.exports=router;