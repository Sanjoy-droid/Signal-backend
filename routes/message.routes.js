const express = require("express");
const router = express.Router();

const checkUser = require("../middleware/checkUser.js");
const sendMessage = require("../Endpoints/sendMessage.endpoint.js");
const getMessage = require("../Endpoints/getMessage.endpoint.js");

router.get("/:id", checkUser, getMessage);
router.post("/send/:id", checkUser, sendMessage);

module.exports = router;
