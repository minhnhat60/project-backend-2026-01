const express = require("express");
const router = express.Router();
const { index }  = require("../../controllers/client/home.controller");

router.get("", index);

module.exports = router;