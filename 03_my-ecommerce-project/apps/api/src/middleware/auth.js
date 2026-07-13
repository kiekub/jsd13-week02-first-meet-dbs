const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Host = require("../models/Host");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res
      .status(401)
      .json({ status: "fail", message: "Not authorized to access this route" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user = await User.findById(decoded.id);
    if (!user) user = await Host.findById(decoded.id);

    if (!user) {
      return res
        .status(401)
        .json({ status: "fail", message: "User no longer exists" });
    }

    req.user = user;
    req.userRole = decoded.role;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ status: "fail", message: "Not authorized to access this route" });
  }
};

module.exports = { protect };
