const express = require("express");
const router = express.Router();
const { product } = require("../../controllers/client/product.controller");

router.get("/", product); 

module.exports = router;