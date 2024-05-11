const jwt = require("jsonwebtoken");
const User = require('../models/users');

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      return res.status(401).json({
        message: "Please login to access this resource"
      });
    }

    const decodedData = jwt.verify(token, process.env.jwt_secret_key);
    req.user = await User.findById(decodedData.id);
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

exports.authorizeRoles = (...isAdmin) => {
  return (req, res, next) => {
    if (!isAdmin.includes(req.user.isAdmin)) {
      return res.status(403).json({
        message: `User with role '${req.user.isAdmin}' is not allowed to access this resource`
      });
    }

    next();
  };
};
