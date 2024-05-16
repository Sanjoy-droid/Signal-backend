const sendMessage = require("../Endpoints/message.endpoint.js");
const checkUser = require("../middleware/checkUser.js");

const express = require("express");
const router = express.Router();

router.post("/send/:id", checkUser, sendMessage);

module.exports = router;
