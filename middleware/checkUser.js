const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const checkUser = async (req, res, next) => {
  try {
    // Access the Authorization header in a case-insensitive manner
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided!!!" });
    }

    // Extract the token from the Bearer scheme
    const jwtToken = token.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    // Check if the decoded token is valid
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token!!!" });
    }

    // Find the user by ID and exclude the password
    const user = await User.findById(decoded.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User Not Found!!!" });
    }

    // Attach the user to the request object
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in middleware", error.message);
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
};

module.exports = checkUser;
