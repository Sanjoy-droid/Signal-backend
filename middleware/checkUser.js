const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const checkUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided!!!" });
    }

    const jwtToken = token.split(" ")[1];
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token!!!" });
    }

    const user = await User.findById(decoded.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User Not Found!!!" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in middleware", error.message);
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
};

module.exports = checkUser;
