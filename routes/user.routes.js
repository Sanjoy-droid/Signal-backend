const epxress = require("express");
const router = epxress.Router();
const checkUser = require("../middleware/checkUser");
const getUserList = require("../Endpoints/user.endpoint");

router.get("/", checkUser, getUserList);

module.exports = router;
