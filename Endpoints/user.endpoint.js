const User = require("../Models/User");

const getUserList = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUser } });
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in the getUserList endpoint!!!", error.message);
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
};

module.exports = getUserList;
